import React, { Component } from 'react'

export default class Select extends Component {
    _mounted = false

    state = {
        options: this.props.options || []
    }

    constructor(props) {
        super(props)

        if (
            typeof window !== 'undefined' &&
            this.props.type === 'select' &&
            this.props.link
        ) {
            let { gun } = window
            gun.get(this.props.link)
                .map()
                .once((data, key) => {
                    let options = this.state.options
                    if (data && data.name) {
                        options.push({ value: key, text: data.name })
                        if (this._mounted) this.setState(options)
                    }
                })
        }
    }

    UNSAFE_componentWillMount() {
        this._mounted = true
    }

    componentWillUnmount() {
        this._mounted = false
        // if (typeof window !== 'undefined') gun.get(this.props.link).off()
    }

    render() {
        const props = this.props.data || this.props
        const { key, onChange = () => {}, disabled = false } = this.props
        return (
            <div className="field" key={key || props.name}>
                {props.label ? (
                    <label className="label" for={props.name}>
                        {props.label}
                    </label>
                ) : (
                    ''
                )}
                <div
                    className={
                        'control' +
                        (props.icon && props.icon.left
                            ? ' has-icons-left'
                            : '') +
                        (props.icon && props.icon.right
                            ? ' has-icons-right'
                            : '')
                    }
                >
                    <div
                        className={
                            'select' +
                            (props.className ? ` ${props.className}` : '')
                        }
                    >
                        <select
                            name={props.name}
                            id={props.name}
                            onChange={onChange}
                            aria-label={props.label}
                            disabled={disabled}
                        >
                            {this.state.options.map(item => (
                                <option
                                    value={item.value}
                                    selected={
                                        this.props.fieldContext === item.value
                                            ? true
                                            : false
                                    }
                                >
                                    {item.text || item.value}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}
