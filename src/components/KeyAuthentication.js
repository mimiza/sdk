import React, { Component } from 'react'
import { navigate } from 'gatsby'
import { authenticate } from '../services/access'
import { notify } from '../services/utils'

import Form from './Form'

export default class extends Component {
    state = {}
    key = null

    onSubmit = data => {
        if (data.key && typeof window !== 'undefined') {
            const { locale } = this.props.pageContext
            try {
                const key = JSON.parse(data.key)
                if (
                    typeof window !== 'undefined' &&
                    key &&
                    key.pub &&
                    key.epub &&
                    key.priv &&
                    key.epriv
                )
                    authenticate(
                        key,
                        response => {
                            this.setState({ processing: false })
                            if (response.err) notify(response.err, 'is-danger')
                            else navigate(`/${locale}/dashboard`)
                        },
                        {
                            remember: data.remember
                        }
                    )
            } catch (e) {}
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
                        label: common.upload,
                        name: 'key',
                        type: 'file',
                        icon: 'fas fa-upload',
                        className: 'is-fullwidth is-boxed has-text-centered'
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
