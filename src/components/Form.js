import React, { Component, Suspense } from 'react'

export default class Form extends Component {
    _mounted = false

    state = {
        processing: false
    }

    UNSAFE_componentWillMount() {
        this._mounted = true
    }

    componentWillUnmount() {
        this._mounted = false
    }

    onSubmit = event => {
        event.preventDefault()

        let formData = {}

        const form = new FormData(event.target)

        for (const item of form) formData[item[0]] = item[1]

        Promise.all(
            this.props.schema.map(
                data =>
                    new Promise((resolve, reject) => {
                        if (data.type === 'number' && formData[data.name]) {
                            formData[data.name] = parseFloat(
                                formData[data.name]
                            )
                            resolve()
                        }
                        if (data.type === 'checkbox') {
                            formData[data.name] = formData[data.name]
                                ? true
                                : false
                            resolve()
                        } else if (
                            data.type === 'file' &&
                            formData[data.name]
                        ) {
                            if (
                                formData[data.name].name !== '' &&
                                !formData[data.name].size !== 0
                            ) {
                                const file = formData[data.name]
                                const reader = new FileReader()
                                if (
                                    ['application/json'].indexOf(file.type) > -1
                                )
                                    reader.readAsText(file)
                                else if (
                                    [
                                        'image/jpeg',
                                        'image/png',
                                        'image/svg+xml'
                                    ].indexOf(file.type) > -1
                                )
                                    reader.readAsDataURL(file)
                                reader.onload = () => {
                                    formData[data.name] = reader.result
                                    resolve()
                                }
                                reader.onerror = error => {
                                    reject(error)
                                }
                            } else {
                                delete formData[data.name]
                                resolve()
                            }
                        } else resolve()
                    })
            )
        ).then(() => {
            if (this.props.onSubmit) this.props.onSubmit(formData)
        })
    }

    render() {
        const { pageContext, formContext = {}, schema, children } = this.props

        let map = {},
            components = {}

        const types = {
            text: 'Field',
            number: 'Field',
            password: 'Field',
            checkbox: 'Field',
            hidden: 'Field',
            select: 'Select',
            textarea: 'Textarea',
            file: 'File',
            submit: 'Button',
            reset: 'Button',
            button: 'Button'
        }

        schema.map(
            item => (map[item.type] = map[item.type] || types[item.type])
        )

        Object.keys(map).map(item =>
            !components[item]
                ? (components[item] = React.lazy(() =>
                      import(`./${map[item]}`)
                  ))
                : null
        )

        return typeof window !== 'undefined' ? (
            <form onSubmit={this.onSubmit} className="has-text-left">
                <fieldset disabled={this.state.processing}>
                    <Suspense>
                        {schema.map(item =>
                            item.display !== false && types[item.type] ? (
                                <div className="field" key={item.name}>
                                    {React.createElement(
                                        components[item.type],
                                        {
                                            pageContext,
                                            key: item.name,
                                            fieldContext:
                                                formContext && formContext.data
                                                    ? formContext.data[
                                                          item.name
                                                      ]
                                                    : null,
                                            ...item
                                        }
                                    )}
                                </div>
                            ) : null
                        )}
                    </Suspense>
                    {children}
                </fieldset>
            </form>
        ) : null
    }
}
