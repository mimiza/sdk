import React, { Component, Suspense } from 'react'

import Section from '../components/Section'

const Scanner = React.lazy(() =>
    typeof window !== 'undefined' ? import('react-qr-scanner') : ''
)

const defaultState = {
    data: '',
    status: null,
    scanning: false
}

export default class Scan extends Component {
    state = defaultState

    handleScan = data => {
        if (typeof window !== 'undefined' && data) {
            let { gun } = window
            ;(async () => {
                let request = await gun
                    .get(data)
                    .get('request')
                    .once()

                if (
                    request &&
                    request.pub &&
                    request.epub &&
                    request.userAgent
                ) {
                    this.setState({
                        address: data,
                        data: request
                    })
                }
            })()
        }
    }

    handleError = error => {
        console.error(error)
    }

    allowAccess = () => {
        if (
            typeof window !== 'undefined' &&
            this.state.address &&
            this.state.data &&
            this.state.data.pub &&
            this.state.data.epub &&
            this.state.data.userAgent
        ) {
            let { gun, sea, user } = window
            ;(async () => {
                const pair = await sea.pair()

                const key = await sea.sign(
                    await sea.encrypt(
                        JSON.stringify(user._.sea),
                        await sea.secret(this.state.data.epub, pair)
                    ),
                    pair
                )

                await gun
                    .get(this.state.address)
                    .get('response')
                    .put({
                        pub: pair.pub,
                        epub: pair.epub,
                        key
                    })

                this.setState(defaultState)
            })()
        }
    }

    render() {
        const { pageContext } = this.props
        const { common, dictionary } = pageContext

        return typeof window !== 'undefined' ? (
            !this.state.data ? (
                <Suspense>
                    <Scanner
                        className="scanner"
                        delay={10}
                        onError={this.handleError}
                        onScan={this.handleScan}
                    />
                </Suspense>
            ) : this.state.status === null ? (
                <Section
                    pageContext={pageContext}
                    className="has-text-centered"
                    data={{
                        header: common.authorization,
                        subheader: dictionary.authorizationDescription,
                        description: this.state.data.userAgent
                    }}
                >
                    <div className="buttons is-centered">
                        <button
                            onClick={this.allowAccess}
                            className="button is-primary"
                        >
                            {common.allow}
                        </button>
                        <button
                            onClick={() => this.setState(defaultState)}
                            className="button"
                        >
                            {common.deny}
                        </button>
                    </div>
                </Section>
            ) : null
        ) : null
    }
}
