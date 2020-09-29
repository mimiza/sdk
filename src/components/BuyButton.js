import React, { Component } from 'react'

import { getParams } from '../services/pixel'

import Accordion from './Accordion'
import JvzooButton from './JvzooButton'
import PaypalButton from './PaypalButton'
import Divider from './Divider'

export default class BuyButton extends Component {
    state = {
        modalToggle: false,
        paymentMethods: []
    }

    UNSAFE_componentWillMount() {
        const params = getParams()

        if (typeof window !== 'undefined') {
            const paymentMethods =
                (params.methods
                    ? params.methods.replace(/\W*$/g, '').split('|')
                    : null) ||
                JSON.parse(localStorage.getItem('paymentMethods')) ||
                []
            localStorage.setItem(
                'paymentMethods',
                JSON.stringify(paymentMethods)
            )
            this.setState({ paymentMethods: paymentMethods })
        }
    }

    render() {
        const { pageContext, data, className } = this.props
        const { common } = pageContext

        const openModal = () => this.setState({ modalToggle: true })
        const closeModal = () => this.setState({ modalToggle: false })

        return (
            <>
                {data.jvzoo &&
                this.state.paymentMethods.indexOf('jvzoo') > -1 ? (
                    <JvzooButton
                        data={data}
                        pageContext={pageContext}
                        className={className}
                    />
                ) : null}
                {this.state.paymentMethods.indexOf('jvzoo') === -1 ? (
                    <>
                        <button
                            onClick={openModal}
                            className={
                                'button is-uppercase has-text-weight-bold' +
                                (className ? ` ${className}` : '')
                            }
                        >
                            {common.buyNow}
                        </button>
                        <div
                            className={
                                'modal' +
                                (this.state.modalToggle ? ' is-active' : '')
                            }
                        >
                            <div className="modal-background has-background-white" />
                            <div
                                className="modal-content"
                                style={{ height: '100%' }}
                            >
                                <div className="section">
                                    <header className="title has-text-centered has-text-primary has-text-weight-normal">
                                        {common.paymentMethodHeader}
                                    </header>
                                    <header className="subtitle has-text-centered has-text-dark has-text-weight-light">
                                        {common.paymentMethodSubheader}
                                    </header>
                                    <Divider className="is-primary is-centered is-tiny" />
                                    <Accordion
                                        style={{
                                            overflowY: 'auto'
                                        }}
                                        data={[
                                            {
                                                marker: {
                                                    className: 'is-small',
                                                    icon: 'fa-credit-card'
                                                },
                                                header: common.onlinePayments,
                                                children: (
                                                    <div className="columns is-centered">
                                                        <div className="column">
                                                            <PaypalButton
                                                                data={data}
                                                                pageContext={
                                                                    pageContext
                                                                }
                                                                style={{
                                                                    label:
                                                                        'pay',
                                                                    size:
                                                                        'responsive',
                                                                    shape:
                                                                        'pill',
                                                                    color:
                                                                        'gold',
                                                                    tagline: false
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                )
                                            },
                                            {
                                                marker: {
                                                    className: 'is-small',
                                                    icon: 'fa-money-check-alt'
                                                },
                                                header: common.bankTransfer,
                                                children: (
                                                    <div className="bank-info">
                                                        <span className="header">
                                                            {common.bank}:
                                                        </span>
                                                        <span>Vietcombank</span>
                                                        <br />
                                                        <span className="header">
                                                            {common.branch}:
                                                        </span>
                                                        <span>
                                                            Thành Công - Hà Nội
                                                        </span>
                                                        <br />
                                                        <span className="header">
                                                            {common.address}:
                                                        </span>
                                                        <span>
                                                            198 Tran Quang Khai,
                                                            Hanoi, Vietnam
                                                        </span>
                                                        <br />
                                                        <span className="header">
                                                            {
                                                                common.accountHolder
                                                            }
                                                            :
                                                        </span>
                                                        <span>
                                                            NGUYEN KY SON
                                                        </span>
                                                        <br />
                                                        <span className="header">
                                                            {
                                                                common.accountNumber
                                                            }
                                                            :
                                                        </span>
                                                        <span>
                                                            0021001176378
                                                        </span>
                                                        <br />
                                                        <span className="header">
                                                            {common.swiftCode}:
                                                        </span>
                                                        <span>BFTVVNVX</span>
                                                    </div>
                                                )
                                            }
                                        ]}
                                    />
                                </div>
                            </div>
                            <button
                                onClick={closeModal}
                                className="modal-close is-large has-background-grey-light"
                                aria-label="close"
                            />
                        </div>
                    </>
                ) : null}
            </>
        )
    }
}
