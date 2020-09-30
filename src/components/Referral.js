import React, { Component } from "react"
import config from "../../config"
import Data from "./Data"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { notify, encodeQuery } from "../services/utils"

export default class extends Component {
    data = React.createRef()

    getReferralCode = async () => {
        if (typeof window !== "undefined") {
            let { sea, user } = window
            const message = "getReferralCode"
            const signature = await sea.sign(message, user._.sea)
            const data = {
                signature,
                user: { pub: user.is.pub }
            }
            const query = encodeQuery(data)

            const request = `${config.cloud.getReferralCode}?${query}`

            fetch(request)
        }
    }

    callback = scope => {
        if (typeof window !== "undefined") {
            scope.map().once((data, key) => {
                if (data)
                    this.data.current.loadData({
                        data: { referralCode: key },
                        key
                    })
            })
        }
    }

    render() {
        const { pageContext } = this.props
        const { common } = pageContext

        return (
            <>
                <div className="field">
                    <div className="control">
                        <button
                            type="button"
                            className="button is-primary"
                            onClick={this.getReferralCode}
                        >
                            {common.getReferralCode}
                        </button>
                    </div>
                </div>
                {typeof window !== "undefined" &&
                window.user &&
                window.user.is ? (
                    <>
                        <Data
                            pageContext={pageContext}
                            namespace="gun"
                            path={`~${config.system.pub}/user/${window.user.is.pub}/referralCode`}
                            callback={this.callback}
                            render={item => {
                                if (typeof window !== "undefined") {
                                    const referralLink = `${window.location.origin}/?ref=${item.data.referralCode}`

                                    return (
                                        <div className="field has-addons">
                                            <div className="control has-icons-left is-expanded">
                                                <input
                                                    className="input is-primary"
                                                    type="text"
                                                    value={referralLink}
                                                    readOnly
                                                />
                                                <span className="icon is-left">
                                                    <i className="fas fa-link"></i>
                                                </span>
                                            </div>
                                            <div className="control">
                                                <CopyToClipboard
                                                    text={referralLink}
                                                >
                                                    <button
                                                        onClick={() => {
                                                            notify(
                                                                `${common.referralCode} ${common.copied}`,
                                                                "is-success"
                                                            )
                                                        }}
                                                        className="button is-primary"
                                                    >
                                                        <span className="icon">
                                                            <i className="fas fa-copy"></i>
                                                        </span>
                                                        <span>
                                                            {common.copy}
                                                        </span>
                                                    </button>
                                                </CopyToClipboard>
                                            </div>
                                        </div>
                                    )
                                }
                            }}
                            ref={this.data}
                        />
                        <Data
                            pageContext={pageContext}
                            path={`message#${window.user.is.pub}`}
                        />
                    </>
                ) : null}
            </>
        )
    }
}
