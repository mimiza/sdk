import React, { Component } from 'react'
import { navigate } from 'gatsby'
import { logOut } from '../services/access'
import { SmartLink } from '../services/i18n'
import GlobalContext from '../services/context'

export default class Profile extends Component {
    static contextType = GlobalContext

    state = {
        authenticated: false
    }

    render() {
        const { pageContext, className } = this.props
        const { common, locale } = pageContext

        return (
            <>
                <button
                    onClick={() => {
                        if (!this.context.authenticated)
                            navigate(`/${locale}/sign-in`)
                    }}
                    className={'button' + (className ? ` ${className}` : '')}
                >
                    {this.context.authenticated && this.context.picture ? (
                        <span className="image icon">
                            <img
                                src={this.context.picture}
                                alt=""
                                className="is-rounded"
                            />
                        </span>
                    ) : (
                        <span className="icon">
                            <img src="/images/icons/user.svg" alt="" />
                        </span>
                    )}
                </button>
                {this.context.authenticated ? (
                    <div className="navbar-dropdown is-right">
                        <SmartLink
                            pageContext={this.props.pageContext}
                            to="/dashboard/profile"
                            className="navbar-item has-text-centered has-text-weight-bold"
                        >
                            {this.context.firstName} {this.context.lastName}{' '}
                            {this.context.username
                                ? `(${this.context.username})`
                                : null}
                        </SmartLink>

                        <hr className="navbar-divider" />
                        <SmartLink
                            pageContext={this.props.pageContext}
                            to="/dashboard"
                            className="navbar-item"
                        />
                        <SmartLink
                            pageContext={this.props.pageContext}
                            to="/dashboard/profile"
                            className="navbar-item"
                        />
                        <SmartLink
                            pageContext={this.props.pageContext}
                            to="/dashboard/authorize"
                            className="navbar-item"
                        />
                        <SmartLink
                            pageContext={this.props.pageContext}
                            to="/dashboard/change-password"
                            className="navbar-item"
                        />
                        <hr className="navbar-divider" />
                        <div className="navbar-item">
                            <button
                                onClick={() => {
                                    logOut(() => {
                                        this.setState({ authenticated: false })
                                        navigate(`/${locale}`)
                                    })
                                }}
                                className="button is-fullwidth is-primary is-rounded"
                            >
                                {common.logout}
                            </button>
                        </div>
                    </div>
                ) : null}
            </>
        )
    }
}
