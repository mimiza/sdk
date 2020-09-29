import React, { Component } from 'react'
import { navigate } from 'gatsby'
import config from '../../config'
import { authenticate } from '../services/access'
import { notify, signAndHash } from '../services/utils'

import Form from '../components/Form'
import Field from '../components/Field'

const defaultState = {
    processing: false
}

export default class SignUp extends Component {
    _mounted = false

    state = defaultState

    UNSAFE_componentWillMount() {
        this._mounted = true
    }

    componentWillUnmount() {
        this._mounted = false
    }

    onSubmit = formData => {
        const { locale } = this.props.pageContext
        this.setState({ processing: true })
        if (typeof window !== 'undefined') {
            const { firstName, lastName, username, password } = formData
            let { Gun, gun, user } = window
            user.create(username, password, async response => {
                if (!this._mounted) this.setState({ processing: false })
                if (response.err) notify(response.err, 'is-danger')
                else {
                    // Check if the new user is referred by someone else
                    const ref = window.localStorage.getItem('ref')
                    if (ref) {
                        const referrer = await gun
                            .user(config.system.pub)
                            .get('referralCode')
                            .get(ref)

                        if (
                            typeof referrer !== 'undefined' &&
                            referrer.pub &&
                            referrer._ &&
                            referrer._['#']
                        ) {
                            // Send a signed message to the referrer
                            const rawData = {
                                referrer: { '#': referrer._['#'] },
                                referee: { '#': `~${user.is.pub}` },
                                referralCode: ref,
                                timestamp: Gun.state()
                            }

                            const signed = await signAndHash(rawData)

                            const link = `message#${referrer.pub}`

                            if (signed.data && signed.hash)
                                gun.get(link)
                                    .get(signed.hash)
                                    .put(signed.data)
                        }
                    }

                    // If callback exist in user.create(), user.auth() won't fire, must auth manually
                    authenticate(username, password, async () => {
                        await user.get('profile').put({
                            firstName,
                            lastName
                        })

                        const rawData = {
                            '#': `~${user.is.pub}`
                        }

                        const signed = await signAndHash(rawData)

                        // For mor information, please read this doc -> https://gun.eco/docs/Content-Addressing
                        if (signed.data && signed.hash)
                            await gun
                                .get('#user')
                                .get(signed.hash)
                                .put(signed.data)

                        window.dispatchEvent(window.authenticated)
                        navigate(`/${locale}/dashboard`)
                    })
                }
            })
        }
    }

    render() {
        const { pageContext } = this.props
        const { common } = pageContext

        return (
            <Form
                pageContext={pageContext}
                onSubmit={this.onSubmit}
                schema={[
                    {
                        placeholder: common.firstName,
                        name: 'firstName',
                        type: 'text',
                        icon: { left: { icon: 'fas fa-user' } },
                        required: true
                    },
                    {
                        placeholder: common.lastName,
                        name: 'lastName',
                        type: 'text',
                        icon: { left: { icon: 'fas fa-user' } },
                        required: true
                    },
                    {
                        placeholder: common.username,
                        name: 'username',
                        type: 'text',
                        icon: { left: { icon: 'fas fa-user' } },
                        required: true
                    },
                    {
                        placeholder: common.password,
                        name: 'password',
                        type: 'password',
                        icon: { left: { icon: 'fas fa-ellipsis-h' } },
                        required: true
                    },
                    {
                        label: common.signUpButton,
                        name: 'signUp',
                        type: 'button',
                        className: 'is-primary is-fullwidth'
                    }
                ]}
            />
        )
    }
}
