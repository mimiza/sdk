import React, { Component } from 'react'

export default class extends Component {
    state = {}

    onChange = event => {
        event.preventDefault()
        const file = event.target.files[0]
        this.setState({ name: file.name })
        const reader = new FileReader()
        reader.readAsText(file)
        reader.onload = () => {
            if (this.props.onChange) this.props.onChange(reader.result)
        }
    }

    render() {
        const props = this.props.data || this.props

        const { key, disabled = false, fieldContext = null } = props

        return (
            <>
                <div
                    className={
                        'file' +
                        (props.className ? ` ${props.className}` : '') +
                        (this.state.name ? ` has-name` : '')
                    }
                    key={key}
                >
                    <label className="file-label">
                        <input
                            name={props.name}
                            id={props.name}
                            className="file-input"
                            type={props.type}
                            placeholder={props.placeholder}
                            onChange={this.onChange}
                            aria-label={props.label}
                            disabled={disabled}
                        />
                        <span className="file-cta">
                            {props.icon ? (
                                <span className="file-icon">
                                    <i className={props.icon}></i>
                                </span>
                            ) : null}
                            {props.label ? (
                                <span className="file-label">
                                    {props.label}
                                </span>
                            ) : null}
                        </span>
                        {this.state.name ? (
                            <span className="file-name">{this.state.name}</span>
                        ) : null}
                    </label>
                </div>
                {props.helper && props.helper.content ? (
                    <p
                        className={
                            'help' +
                            (props.helper.className
                                ? ` ${props.helper.className}`
                                : '')
                        }
                    >
                        {props.helper.content}
                    </p>
                ) : null}
            </>
        )
    }
}
