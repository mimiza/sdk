import React, { Component } from 'react'
import { SmartLink } from '../services/i18n'
import Children from './Children'

export default class NavbarItem extends Component {
    state = {
        navbarToggle: false
    }

    render() {
        const { pageContext } = this.props

        return this.props.hasChildren ? (
            <div
                onClick={() =>
                    this.setState({
                        navbarToggle: !this.state.navbarToggle
                    })
                }
                className={
                    'navbar-item' +
                    (this.props.hasChildren ? ' has-dropdown' : '') +
                    (this.props.className ? ' ' + this.props.className : '') +
                    (this.state.navbarToggle ? ' is-active' : '')
                }
            >
                <div className="navbar-dropdown-wrapper">
                    <SmartLink
                        pageContext={pageContext}
                        to={this.props.to}
                        className="navbar-link is-arrowless"
                    >
                        {this.props.children}
                    </SmartLink>
                    <a role="button" className="navbar-dropdown-arrow">
                        <span aria-hidden="true" />
                    </a>
                </div>
                <div
                    className={
                        'navbar-dropdown' +
                        (!this.state.navbarToggle ? ' is-hidden' : '')
                    }
                >
                    <Children
                        match={'^/\\w+' + this.props.to + '/[\\w\\s\\d-]*$'}
                        layout="link"
                        pageContext={pageContext}
                        className="navbar-item"
                    />
                </div>
            </div>
        ) : (
            <SmartLink
                pageContext={pageContext}
                to={this.props.to}
                className="navbar-item"
            >
                {this.props.children}
            </SmartLink>
        )
    }
}
