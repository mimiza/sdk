import React, { Component } from 'react'

export default class extends Component {
    state = {}

    handleFileUpload = event => {
        event.preventDefault()
        const file = event.target.files[0]
        if (file && this.props.callback) {
            this.setState({ name: file.name })
            const reader = new FileReader()
            if (['application/json'].indexOf(file.type) > -1)
                reader.readAsText(file)
            if (['image/png', 'image/jpeg'].indexOf(file.type) > -1)
                reader.readAsDataURL(file)
            reader.onload = () => this.props.callback(reader.result)
        }
    }

    render() {
        const { pageContext, className } = this.props
        const { common } = pageContext

        return (
            <div
                className={
                    'file' +
                    (className ? ` ${className}` : '') +
                    (this.state.name ? ' has-name' : '')
                }
            >
                <label className="file-label">
                    <input
                        className="file-input"
                        type="file"
                        name="key"
                        onChange={this.handleFileUpload}
                    />
                    <span className="file-cta">
                        <span className="file-icon">
                            <i className="fas fa-upload"></i>
                        </span>
                        <span className="file-label">{common.upload}</span>
                    </span>
                    {this.state.name ? (
                        <span className="file-name">{this.state.name}</span>
                    ) : null}
                </label>
            </div>
        )
    }
}
