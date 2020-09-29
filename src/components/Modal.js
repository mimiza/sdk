import React, {
    Component,
    Children,
    isValidElement,
    cloneElement,
    useEffect
} from 'react'

import Section from './Section'

export default class Modal extends Component {
    state = {
        modalToggle: false
    }
    modalContent = React.createRef()
    modalContentW = 0
    modalContentH = 0

    componentDidMount() {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.resize)
        }
    }

    componentWillUnmount() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.resize)
        }
    }

    resize = () => {
        const style = getComputedStyle(this.modalContent.current)

        let { paddingTop, paddingRight, paddingBottom, paddingLeft } = style

        paddingTop = parseFloat(paddingTop)
        paddingRight = parseFloat(paddingRight)
        paddingBottom = parseFloat(paddingBottom)
        paddingLeft = parseFloat(paddingLeft)

        this.modalContentW =
            this.modalContent.current.offsetWidth - paddingLeft - paddingRight
        this.modalContentH =
            this.modalContent.current.offsetHeight - paddingTop - paddingBottom

        if (this.props.callback)
            this.props.callback(this.modalContentW, this.modalContentH)
    }

    openModal = () => this.setState({ modalToggle: true })

    closeModal = () => {
        this.setState({ modalToggle: false })
        if (this.props.onClose) this.props.onClose()
    }

    extendElement = element => {
        if (isValidElement(element))
            return cloneElement(element, {
                openModal: this.openModal,
                closeModal: this.closeModal
            })
        return element
    }

    render() {
        const {
            className,
            backgroundClassName,
            scrollBar = true,
            layout
        } = this.props

        let { children } = this.props

        if (this.state.modalToggle)
            if (!this.modalContentW || !this.modalContentH)
                useEffect(() => {
                    this.resize()
                })

        const header =
            layout === 'card' && this.props.header ? (
                <header className="modal-card-head">
                    {this.props.header.title ? (
                        <p className="modal-card-title">
                            {this.props.header.title}
                        </p>
                    ) : null}
                    {this.props.header.children
                        ? this.props.header.children
                        : null}
                    <button
                        onClick={this.closeModal}
                        className="delete"
                        aria-label="close"
                    />
                </header>
            ) : null

        children =
            this.props.body && this.props.body.children
                ? { ...children, ...this.props.body.children }
                : children
        children = Children.map(children, this.extendElement)

        if (layout !== 'card')
            children = (
                <section
                    className="section"
                    style={{
                        padding: '1.5rem'
                    }}
                >
                    <div className="box">{children}</div>
                </section>
            )

        const body =
            (this.props.body && this.props.body.children) || children ? (
                <section
                    className={
                        (layout === 'card'
                            ? 'modal-card-body'
                            : 'modal-content') +
                        (this.props.body && this.props.body.className
                            ? ` ${this.props.body.className}`
                            : '')
                    }
                    style={{
                        height: '100vh',
                        overflow: !scrollBar ? 'hidden' : 'auto'
                    }}
                    ref={this.modalContent}
                >
                    {children}
                </section>
            ) : null

        const footer =
            this.props.footer && this.props.footer.children ? (
                <footer
                    className={
                        (layout === 'card'
                            ? 'modal-card-foot'
                            : 'modal-footer') +
                        (this.props.footer.className
                            ? ` ${this.props.footer.className}`
                            : '')
                    }
                >
                    {this.props.footer.children}
                </footer>
            ) : null

        return (
            <div
                className={
                    'modal' +
                    (className ? ` ${className}` : '') +
                    (this.state.modalToggle ? ' is-active' : '')
                }
                tabIndex="0"
                onKeyDown={e => {
                    if (e.key === 'Escape' && this.state.modalToggle)
                        this.closeModal()
                }}
            >
                <div
                    className={
                        'modal-background' +
                        (backgroundClassName ? ` ${backgroundClassName}` : '')
                    }
                    onClick={this.closeModal}
                />
                {layout === 'card' ? (
                    <div className="modal-card">
                        {header}
                        {body}
                        {footer}
                    </div>
                ) : (
                    <>
                        {body}
                        {footer}
                        <button
                            onClick={this.closeModal}
                            className="modal-close is-large"
                            aria-label="close"
                        />
                    </>
                )}
            </div>
        )
    }
}
