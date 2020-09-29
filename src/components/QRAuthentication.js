import React, { Component } from 'react'
import { navigate } from 'gatsby'
import QRCode from 'qrcode-svg'
import { authenticate } from '../services/access'
import { notify } from '../services/utils'

const defaultState = {
    qr: '',
    address: ''
}

export default class extends Component {
    state = defaultState

    componentDidMount() {
        if (typeof window !== 'undefined') {
            const { locale } = this.props.pageContext
            ;(async () => {
                let { Gun, gun, sea } = window
                const pair = await sea.pair()
                const address = `${Gun.text.random()}<?300`

                this.setState({
                    qr: new QRCode({
                        content: address,
                        container: 'svg-viewbox',
                        padding: 0,
                        join: true
                    }).svg(),
                    address
                })

                const userAgent = navigator.userAgent

                const request = {
                    pub: pair.pub,
                    epub: pair.epub,
                    userAgent
                }

                await gun
                    .get(address)
                    .get('request')
                    .put(request)

                gun.get(address)
                    .get('response')
                    .on(async data => {
                        let verification = await sea.verify(data.key, data.pub)
                        let secret = await sea.secret(data.epub, pair)
                        let key = await sea.decrypt(verification, secret)
                        if (key && key.pub && key.epub && key.priv && key.epriv)
                            authenticate(key, response => {
                                if (response.err)
                                    notify(response.err, 'is-danger')
                                else navigate(`/${locale}/dashboard`)
                            })
                    }, true)
            })()
        }
    }

    componentWillUnmount() {
        if (typeof window !== 'undefined' && this.state.address)
            window.gun.get(this.state.address).off()
    }

    render() {
        return this.state.qr ? (
            <figure
                className="image is-square is-paddingless"
                dangerouslySetInnerHTML={{
                    __html: this.state.qr
                }}
            />
        ) : null
    }
}
