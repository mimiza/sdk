import React, { Component } from 'react'
import { SmartLink } from '../services/i18n'
import branding from '../images/branding.svg'
import GlobalContext from '../services/context'
import Profile from './Profile'
import Menu from './Menu'
import PageSubHeader from './PageSubHeader'

export default class Header extends Component {
    static contextType = GlobalContext

    state = {
        navbarToggle: false
    }

    render() {
        const { pageContext } = this.props
        return (
            <>
                <nav
                    className="navbar is-fixed-top"
                    role="navigation"
                    aria-label="main navigation"
                >
                    <div className="navbar-brand">
                        <Menu
                            data={[
                                {
                                    name: 'navigation'
                                },
                                [
                                    {
                                        path: '/dashboard'
                                    },
                                    {
                                        path:
                                            '/dashboard/product-authentication'
                                    },
                                    {
                                        path: '/dashboard/campaign'
                                    },
                                    {
                                        path: '/dashboard/content'
                                    },
                                    {
                                        path: '/dashboard/social-account'
                                    }
                                ],
                                { name: 'makeMoney' },
                                [
                                    {
                                        path: '/dashboard/make-money'
                                    }
                                ],
                                {
                                    name: 'system'
                                },
                                [
                                    {
                                        path: '/dashboard/user'
                                    }
                                ],
                                {
                                    name: 'settings'
                                },
                                [
                                    {
                                        path: '/dashboard/profile'
                                    },
                                    {
                                        path: '/dashboard/security'
                                    },
                                    {
                                        path: '/dashboard/change-password'
                                    },
                                    {
                                        path: '/dashboard/authorize'
                                    }
                                ]
                            ]}
                            access={this.context.access}
                            pageContext={pageContext}
                        />
                        <SmartLink
                            pageContext={this.props.pageContext}
                            to="/"
                            className="navbar-item"
                        >
                            <img src={branding} alt={this.props.siteTitle} />
                        </SmartLink>
                        <a
                            onClick={() =>
                                this.setState({
                                    navbarToggle: !this.state.navbarToggle
                                })
                            }
                            role="button"
                            className={
                                'navbar-burger' +
                                (this.state.navbarToggle ? ' is-active' : '')
                            }
                            aria-label="menu"
                            aria-expanded="false"
                            data-target="navbar"
                        >
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                        </a>
                    </div>

                    <div
                        id="navbar"
                        className={
                            'navbar-menu' +
                            (this.state.navbarToggle ? ' is-active' : '')
                        }
                    >
                        <div className="navbar-end">
                            <div className="navbar-item has-dropdown is-hoverable">
                                <div className="navbar-link is-arrowless">
                                    <Profile
                                        className="is-white is-fullwidth is-rounded"
                                        pageContext={this.props.pageContext}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <PageSubHeader pageContext={pageContext} />
            </>
        )
    }
}
