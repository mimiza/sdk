import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { navigate } from 'gatsby'
import scriptLoader from 'react-async-script-loader'
import { setPixel } from '../services/pixel'

class PaypalButton extends Component {
    state = {
        showButton: false
    }

    componentDidMount() {
        if (this.props.isScriptLoaded && this.props.isScriptLoadSucceed) {
            this.setState({ showButton: true })
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const isLoadedButWasntLoadedBefore =
            !this.state.showButton &&
            !this.props.isScriptLoaded &&
            nextProps.isScriptLoaded

        if (isLoadedButWasntLoadedBefore && nextProps.isScriptLoadSucceed)
            this.setState({ showButton: true })
    }

    render() {
        const { pageContext, data, style } = this.props
        const { locale } = pageContext
        const paypal = typeof window !== 'undefined' ? window.PAYPAL : null
        const client = {
            sandbox:
                'AWWlOPHsQqDs8p6EJicoPflcwbmL1k_SXbTLJzxgCLXqSswD3qPlTWDEZFgV2WSqDwLKZ-DL0WXxSGWh',
            production:
                'ARh0oJd2MdclBD7DsGvBJIUaZWxjBrWN1P-E8C_OitBPmTjX_UYrU3-9hZCWPS8MQZH27YJqLxVFUn_Q'
        }
        const env = 'production'

        const buttonClicked = () =>
            setPixel({ event: 'PaypalButtonClicked', ...data })

        const payment = () =>
            paypal.rest.payment.create(env, client, {
                transactions: [
                    {
                        amount: {
                            total: data.salePrice,
                            currency: data.currency
                        }
                    }
                ]
            })

        const onAuthorize = (_data, actions) =>
            actions.payment.execute().then(() => {
                setPixel({ event: 'paid', ...data, ..._data })
                navigate(`/${locale}/payment/success?item=${data.item}`)
            })

        const onCancel = _data => {
            setPixel({ event: 'cancelled', ...data, ..._data })
            navigate(`/${locale}/payment/cancelled?item=${data.item}`)
        }

        const onError = _data => console.error(_data)

        return (
            this.state.showButton &&
            paypal && (
                <paypal.Button.react
                    onClick={buttonClicked}
                    env={env}
                    client={client}
                    commit={true}
                    payment={payment}
                    onAuthorize={onAuthorize}
                    onCancel={onCancel}
                    onError={onError}
                    style={
                        style
                            ? style
                            : {
                                  //label: 'paypal', // checkout | credit | pay | buynow | paypal | installment
                                  //size: 'medium', // small | medium | large | responsive
                                  shape: 'pill', // pill | rect
                                  color: 'gold', // gold | blue | silver | black
                                  tagline: false
                              }
                    }
                />
            )
        )
    }
}

export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(
    PaypalButton
)
