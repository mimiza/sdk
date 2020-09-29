import React, { Component } from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import { createPath } from '../services/i18n'

export default class PageLocalePicker extends Component {
    state = {
        localeToggle: false
    }

    render() {
        const { pagePath, siteLocales, locale } = this.props.pageContext
        const _pagePaths = siteLocales.map(locale =>
            createPath(locale.code, pagePath)
        )

        return (
            <div
                onClick={() =>
                    this.setState({ localeToggle: !this.state.localeToggle })
                }
                className={
                    'dropdown is-right' +
                    (this.state.localeToggle ? ' is-active' : '')
                }
                role="listbox"
                tabIndex={-1}
            >
                <div className="dropdown-trigger">
                    <button
                        className="button is-primary"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu"
                    >
                        <span className="icon is-small">
                            <i
                                className="fas fa-globe-americas"
                                aria-hidden="true"
                            />
                        </span>
                        <span className="is-hidden-touch">
                            {
                                siteLocales.filter(
                                    _locale => _locale.code === locale
                                )[0].name
                            }
                        </span>
                        <span className="is-uppercase is-hidden-desktop">
                            {
                                siteLocales.filter(
                                    _locale => _locale.code === locale
                                )[0].code
                            }
                        </span>
                        <span className="icon is-small is-hidden-touch">
                            <i
                                className="fas fa-angle-down"
                                aria-hidden="true"
                            />
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        <StaticQuery
                            query={graphql`
                                {
                                    allSitePage {
                                        edges {
                                            node {
                                                path
                                                context {
                                                    title
                                                    locale
                                                }
                                            }
                                        }
                                    }
                                }
                            `}
                            render={data => {
                                const _data = data.allSitePage.edges.filter(
                                    page => {
                                        return (
                                            _pagePaths.indexOf(page.node.path) >
                                            -1
                                        )
                                    }
                                )

                                return _data.map(_page => (
                                    <Link
                                        onClick={() => {
                                            if (typeof window !== 'undefined') {
                                                window.localStorage.locale =
                                                    _page.node.context.locale
                                            }
                                        }}
                                        to={_page.node.path}
                                        className="dropdown-item"
                                        key={_page.node.context.locale}
                                    >
                                        {
                                            siteLocales.filter(
                                                _locale =>
                                                    _locale.code ===
                                                    _page.node.context.locale
                                            )[0].name
                                        }
                                    </Link>
                                ))
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
