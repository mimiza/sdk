import React, { Component } from 'react'
import Hero from './Hero'

export default class Accordion extends Component {
    state = {
        current: 0
    }

    render() {
        const { data, className, style } = this.props
        return (
            <div
                className={'accordion' + (className ? ` ${className}` : '')}
                style={{
                    border: 'blue 3px solid',
                    borderRadius: '6px',
                    ...style
                }}
            >
                {data.map((element, key) => {
                    return (
                        <div
                            onClick={() => this.setState({ current: key })}
                            className="has-background-light has-text-left"
                            key={key}
                            role="listbox"
                            tabIndex={-1}
                        >
                            <button
                                className={
                                    'button is-fullwidth is-radiusless' +
                                    (this.state.current === key
                                        ? ' is-active has-background-primary has-text-white has-text-weight-bold'
                                        : ' has-text-dark has-background-grey-light') +
                                    (element.className
                                        ? ` ${element.className}`
                                        : '')
                                }
                            >
                                <a>
                                    {element.marker && element.marker.icon ? (
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
                                    <span> {element.header}</span>
                                </a>
                            </button>
                            {this.state.current === key && element.children ? (
                                <Hero className="hero is-small">
                                    {element.children}
                                </Hero>
                            ) : null}
                        </div>
                    )
                })}
            </div>
        )
    }
}
