import React, { Component } from 'react'
import Button from './Button'

export default class LocalePicker extends Component {
    state = {
        dropdownToggle: false
    }

    render() {
        const { children, trigger = {}, className } = this.props

        return (
            <div
                onClick={() =>
                    this.setState({
                        dropdownToggle: !this.state.dropdownToggle
                    })
                }
                className={
                    'dropdown' +
                    (className ? ` ${className}` : '') +
                    (this.state.dropdownToggle ? ' is-active' : '')
                }
                role="listbox"
            >
                <div className="dropdown-trigger">
                    <Button {...trigger} />
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">{children}</div>
                </div>
            </div>
        )
    }
}
