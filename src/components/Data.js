import React, { Component } from 'react'
import { hash } from '../services/utils'
import Block from './Block'
import Modal from './Modal'
import Form from './Form'
import Card from './Card'
import Dropdown from './Dropdown'

export default React.memo(
    class extends Component {
        _mounted = false
        layout = {}
        state = {
            formContext: {},
            data: {},
            options: {}
        }
        modal = React.createRef()

        constructor(props) {
            super(props)

            if (!this.props.schema) this.props.schema = []

            if (typeof window !== 'undefined') {
                if (this.props.path) {
                    let { gun, user } = window
                    this.scope =
                        this.props.namespace === 'gun' ||
                        /#/gi.test(this.props.path)
                            ? gun.get(this.props.path)
                            : user.get(this.props.path)

                    // For "Select" and "Checkbox" fields, we create Options state to translate their values (which are actually keys) into names
                    this.props.schema
                        .filter(
                            item =>
                                item.type &&
                                ['checkbox', 'select'].indexOf(item.type) > -1
                        )
                        .map(item => {
                            let options = this.state.options || {}
                            if (item.link) {
                                gun.get(item.link)
                                    .map()
                                    .once((data, key) => {
                                        if (data) {
                                            if (!options[item.name])
                                                options[item.name] = {}
                                            if (!options[item.name][key])
                                                options[item.name][key] =
                                                    data.name
                                        }
                                    })
                                    .then(() => {
                                        if (
                                            this._mounted &&
                                            !options[item.name]
                                        )
                                            this.setState({ options })
                                    })
                            } else if (item.options) {
                                item.options.map(data => {
                                    if (!options[item.name])
                                        options[item.name] = {}
                                    if (!options[item.name][data.value])
                                        options[item.name][data.value] =
                                            data.text
                                })
                                if (this._mounted) this.setState({ options })
                            }
                        })
                }

                // Put the fields into the right places
                this.props.schema.map(field => {
                    if (field.layout) {
                        field.layout.map(position => {
                            this.layout[position] = this.layout[position] || []
                            this.layout[position].push(field)
                        })
                    }
                })
            }
        }

        UNSAFE_componentWillMount() {
            this._mounted = true
        }

        componentDidMount() {
            if (
                typeof window !== 'undefined' &&
                window.location.pathname.replace(/\/*?$/gi, '') ===
                    this.props.pageContext.pagePath &&
                this.scope
            ) {
                if (this.props.callback) this.props.callback(this.scope)
                else
                    this.scope.map().once((data, key) => {
                        if (data) this.loadData({ data, key })
                    })
            }
        }

        componentWillUnmount() {
            this._mounted = false
            // if (
            //     typeof window !== 'undefined' &&
            //     window.location.pathname.replace(/\/*?$/gi, '') ===
            //         this.props.pageContext.pagePath
            // )
            //     this.scope.off()
        }

        loadData = item => {
            if (
                typeof window !== 'undefined' &&
                this._mounted &&
                item.data &&
                item.key
            ) {
                let { sea } = window
                let data = this.state.data
                let key =
                    typeof item.key === 'object'
                        ? JSON.stringify(item.key)
                        : item.key

                ;(async () => {
                    if (/#/gi.test(this.props.path)) {
                        try {
                            const _ = JSON.parse(item.data) || {}
                            if (_ && _.user && _.user.pub) {
                                const _data = await sea.verify(_.data, _.user)
                                if (_data) item.data = _data
                            }
                        } catch {}
                    }

                    data[key] = item

                    this.setState({ data })
                })()
            } else if (
                typeof item === 'object' &&
                Object.keys(item).length > 1
            ) {
                this.setState({ data: item })
            }
        }

        addData = () => {
            this.setState({ context: 'addData', formContext: {} })
            this.modal.current.openModal()
        }

        viewData = item => {
            if (this.props.schema.length) {
                let state = { context: 'viewData' }
                if (item) state.formContext = item
                this.setState(state)
                this.modal.current.openModal()
            }
        }

        presentData = item => {
            const { schema } = this.props
            const { options } = this.state

            let layout = {}

            // check for 'layout' field in each item for presentation
            schema.map(field => {
                const group = field.name,
                    _ = item.data[group]
                if (group && typeof _ !== 'undefined' && field.layout) {
                    // a position is where the field value is presented
                    field.layout.map(position => {
                        const value =
                            ['select'].indexOf(field.type) > -1 &&
                            field.link &&
                            options[group] &&
                            options[group][_]
                                ? options[group][_]
                                : _
                        layout[position] =
                            typeof layout[position] === 'string' &&
                            typeof value === 'string'
                                ? `${layout[position]} ${value}`
                                : value
                    })
                }
            })
            return layout
        }

        deleteData = () => {
            if (
                typeof window !== 'undefined' &&
                this.state.formContext &&
                this.state.formContext.key
            )
                this.scope.get(this.state.formContext.key).put(null)
            this.setState({ formContext: {} })
            this.modal.current.closeModal()
        }

        onSubmit = formData => {
            if (typeof window !== 'undefined') {
                // if formContext exists, update data
                if (this.state.formContext.key && this.scope) {
                    this.scope.get(this.state.formContext.key).put(formData)
                }
                // if path is immutable, hash the data
                else if (this.props.path && /#/gi.test(this.props.path)) {
                    if (typeof formData === 'object') {
                        formData = JSON.stringify(formData)
                        ;(async () => {
                            const _hash = await hash(formData)
                            this.scope.get(_hash).put(formData)
                        })()
                    }
                }
                // nothing else, save new data
                else if (this.scope) this.scope.set(formData)

                this.loadData({
                    key: this.state.formContext.key,
                    data: formData
                })
                this.setState({ formContext: {} })
                this.modal.current.closeModal()
            }
            if (this.props.onSubmit) this.props.onSubmit(formData)
        }

        render() {
            const {
                pageContext,
                schema = [],
                hasForm,
                header,
                footer
            } = this.props

            const types = {
                submit: 'Button',
                reset: 'Button',
                button: 'Button'
            }

            return (
                <>
                    <div
                        className={
                            'level' +
                            (header && header.className
                                ? ` ${header.className}`
                                : '')
                        }
                    >
                        <div className="level-left"></div>
                        <div className="level-right">
                            {this.layout.navigator
                                ? this.layout.navigator.map(item =>
                                      types[item.type] ? (
                                          <div className="level-item">
                                              <Block
                                                  component={types[item.type]}
                                                  {...item}
                                              />
                                          </div>
                                      ) : null
                                  )
                                : null}
                        </div>
                    </div>
                    {hasForm ? (
                        <>
                            <Modal
                                pageContext={pageContext}
                                ref={this.modal}
                                onClose={() =>
                                    this.setState({
                                        context: null,
                                        formContext: {}
                                    })
                                }
                            >
                                {this._mounted ? (
                                    <Form
                                        pageContext={pageContext}
                                        formContext={this.state.formContext}
                                        schema={schema}
                                        onSubmit={this.onSubmit}
                                    >
                                        {this.layout.form ? (
                                            <div className="field is-grouped">
                                                {this.layout.form.map(item =>
                                                    !item.context ||
                                                    (item.context &&
                                                        item.context.indexOf(
                                                            this.state.context
                                                        ) > -1) ? (
                                                        <div className="control">
                                                            <Block
                                                                component={
                                                                    types[
                                                                        item
                                                                            .type
                                                                    ]
                                                                }
                                                                {...item}
                                                            />
                                                        </div>
                                                    ) : null
                                                )}
                                            </div>
                                        ) : null}
                                    </Form>
                                ) : null}
                            </Modal>
                        </>
                    ) : null}
                    <div className="columns is-multiline">
                        {Object.entries(this.state.data).map(item =>
                            this.props.render ? (
                                this.props.render(item[1])
                            ) : (
                                <Card
                                    pageContext={pageContext}
                                    key={item[0]}
                                    data={this.presentData(item[1])}
                                    headerNav={
                                        this.layout.headerNav ? (
                                            <Dropdown
                                                className="is-right"
                                                trigger={{
                                                    className:
                                                        'is-small is-white has-text-grey',
                                                    icon: {
                                                        className: 'is-small',
                                                        left: {
                                                            icon:
                                                                'fas fa-ellipsis-v'
                                                        }
                                                    }
                                                }}
                                            >
                                                {this.layout.headerNav.map(
                                                    _item => (
                                                        <a
                                                            {..._item}
                                                            onClick={() => {
                                                                if (
                                                                    _item.onClick
                                                                )
                                                                    _item.onClick(
                                                                        item[1]
                                                                    )
                                                            }}
                                                        >
                                                            {_item.label}
                                                        </a>
                                                    )
                                                )}
                                            </Dropdown>
                                        ) : null
                                    }
                                    footerNav={
                                        this.layout.footerNav
                                            ? this.layout.footerNav.map(
                                                  _item => (
                                                      <a
                                                          {..._item}
                                                          onClick={() => {
                                                              if (_item.onClick)
                                                                  _item.onClick(
                                                                      item[1]
                                                                  )
                                                          }}
                                                      >
                                                          {_item.label}
                                                      </a>
                                                  )
                                              )
                                            : null
                                    }
                                    render={_item => (
                                        <div className="column is-one-quarter">
                                            {_item}
                                        </div>
                                    )}
                                />
                            )
                        )}
                    </div>
                </>
            )
        }
    }
)
