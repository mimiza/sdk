import React, { Component } from 'react'
import { SmartLink } from '../services/i18n'

export default class Menu extends Component {
    state = {
        sidebarToggle: false
    }

    render() {
        const { data, pageContext, render, access } = this.props
        const { common } = pageContext

        const createMenu = data => {
            if (Array.isArray(data)) {
                return (
                    <ul className="menu-list" key={Math.random()}>
                        {data.map(item => createMenu(item))}
                    </ul>
                )
            } else {
                if (data.path) {
                    return access && access.indexOf(data.path) > -1 ? (
                        <SmartLink
                            pageContext={pageContext}
                            to={data.path}
                            render={children => (
                                <li>
                                    {children}
                                    {data.children
                                        ? createMenu(data.children)
                                        : null}
                                </li>
                            )}
                            key={data.name}
                        >
                            {common[data.name]}
                        </SmartLink>
                    ) : null
                } else
                    return access && access.indexOf(data.name) > -1 ? (
                        <p className="menu-label" key={data.name}>
                            {common[data.name]}
                        </p>
                    ) : null
            }
        }

        const result = (
            <>
                <a
                    onClick={() =>
                        this.setState({
                            sidebarToggle: !this.state.sidebarToggle
                        })
                    }
                    role="button"
                    className={
                        'navbar-burger' +
                        (this.state.sidebarToggle ? ' is-active' : '')
                    }
                    style={{ display: 'block', marginLeft: 0 }}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbar"
                >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
                <div
                    className={
                        'sidebar is-overlay' +
                        (this.state.sidebarToggle ? ' is-active' : '')
                    }
                >
                    <div
                        className="sidebar-background is-overlay"
                        onClick={() => this.setState({ sidebarToggle: false })}
                    ></div>
                    <div className="sidebar-content is-overlay has-background-white-ter column is-12-mobile is-4-tablet is-3-desktop is-2-widescreen">
                        <aside className="menu">
                            {data.map(item => createMenu(item))}
                        </aside>
                    </div>
                </div>
            </>
        )

        if (render && result) {
            return render(result)
        }

        if (result) return result
    }
}
