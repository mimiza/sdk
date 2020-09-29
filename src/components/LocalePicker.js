import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class LocalePicker extends Component {
    state = {
        localeToggle: false
    }

    render() {
        const { siteLocales, locale } = this.props.pageContext

        return (
            <div
                onClick={() =>
                    this.setState({ localeToggle: !this.state.localeToggle })
                }
                className={
                    'dropdown is-up' +
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
                        <span>
                            {
                                siteLocales.filter(
                                    _locale => _locale.code === locale
                                )[0].name
                            }
                        </span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-up" aria-hidden="true" />
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        {siteLocales.map(_locale => (
                            <Link
                                onClick={() => {
                                    if (typeof window !== 'undefined') {
                                        window.localStorage.locale =
                                            _locale.code
                                    }
                                }}
                                to={`/${_locale.code}`}
                                className="dropdown-item"
                                key={_locale.code}
                            >
                                {_locale.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
