import React, { Component } from 'react'
import { SmartLink } from '../services/i18n'
import Profile from './Profile'
import branding from '../images/branding.svg'

import NavbarItem from '../components/NavbarItem'

export default class Header extends Component {
    state = {
        navbarToggle: false
    }

    render() {
        const { pageContext } = this.props
        const { common } = pageContext

        return (
            <nav
                className="navbar is-fixed-top"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
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
                    <div className="navbar-start">
                        <NavbarItem pageContext={pageContext} to="/" />
                        <NavbarItem
                            pageContext={pageContext}
                            to="/exchanges"
                            hasChildren
                        >
                            {common.exchanges}
                        </NavbarItem>
                        <NavbarItem
                            pageContext={pageContext}
                            to="/crypto-savings"
                            hasChildren
                        >
                            {common.savings}
                        </NavbarItem>
                    </div>

                    <div className="navbar-end">
                        <NavbarItem pageContext={pageContext} to="/blog" />
                        {/* <div className="navbar-item">
                            <div className="buttons">
                                <SmartLink
                                    pageContext={this.props.pageContext}
                                    to="/contact"
                                    className="button is-primary has-background-theme is-fullwidth is-rounded is-uppercase"
                                >
                                    <span>{common.contact}</span>
                                </SmartLink>
                            </div>
                        </div> */}
                        <NavbarItem pageContext={pageContext} to="/contact">
                            {common.contact}
                        </NavbarItem>
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
        )
    }
}
