import React, { Component } from 'react'
import { navigate } from 'gatsby'
import { authenticate } from '../services/access'
import { notify } from '../services/utils'

import Form from '../components/Form'

const defaultState = {
    username: '',
    password: '',
    remember: false,
    processing: false,
    usernameHelper: {}
}

export default class LegacyAuthentication extends Component {
    state = defaultState

    onSubmit = data => {
        this.setState({ processing: true })
        if (typeof window !== 'undefined') {
            const { locale } = this.props.pageContext
            authenticate(
                data.username,
                data.password,
                response => {
                    this.setState({ processing: false })
                    if (response.err) notify(response.err, 'is-danger')
                    else navigate(`/${locale}/dashboard`)
                },
                { remember: data.remember }
            )
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
                        name: 'username',
                        type: 'text',
                        placeholder: common.username,
                        icon: {
                            left: {
                                icon: 'fas fa-user'
                            }
                        },
                        helper: this.state.usernameHelper
                    },
                    {
                        name: 'password',
                        type: 'password',
                        placeholder: common.password,
                        icon: {
                            left: {
                                icon: 'fas fa-ellipsis-h'
                            }
                        }
                    },
                    {
                        label: common.remember,
                        name: 'remember',
                        type: 'checkbox',
                        options: [
                            { value: true, text: common.on },
                            { value: false, text: common.off }
                        ]
                    },
                    {
                        label: common.loginButton,
                        name: 'login',
                        type: 'button',
                        className:
                            'button is-primary is-fullwidth' +
                            (this.state.processing ? ' is-loading' : '')
                    }
                ]}
            />
        )
    }
}
