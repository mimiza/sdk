import React, { Component } from 'react'

export default class Tabs extends Component {
    state = {
        current: 0
    }

    render() {
        const { data, className } = this.props
        return (
            <>
                <div className={'tabs' + (className ? ` ${className}` : '')}>
                    <ul>
                        {data.map((element, key) => {
                            return (
                                <li
                                    onClick={() =>
                                        this.setState({ current: key })
                                    }
                                    className={
                                        (this.state.current === key
                                            ? 'is-active '
                                            : '') +
                                        (element.className
                                            ? element.className
                                            : '')
                                    }
                                    key={key}
                                >
                                    <a>
                                        {element.marker &&
                                        element.marker.icon ? (
                                            <span
                                                className={
                                                    'icon' +
                                                    (element.marker &&
                                                    element.marker.className
                                                        ? ` ${element.marker.className}`
                                                        : '')
                                                }
                                            >
                                                <i
                                                    className={`fas ${element.marker.icon}`}
                                                />
                                            </span>
                                        ) : null}
                                        {element.header ? (
                                            <span>{element.header}</span>
                                        ) : null}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>{data[this.state.current].children}</div>
            </>
        )
    }
}
