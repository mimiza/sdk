import React, { Component } from 'react'

export default class Youtube extends Component {
    state = {
        modalToggle: false
    }

    render() {
        const { id } = this.props
        const src = `https://www.youtube.com/embed/${id}`
        const thumbnail = `https://img.youtube.com/vi/${id}/hqdefault.jpg`

        const openModal = src => {
            if (this.iframe.src !== src) this.iframe.src = src
            this.setState({ modalToggle: true })
        }

        const closeModal = () => {
            this.setState({ modalToggle: false })
            this.iframe.src = ''
        }

        return (
            <>
                <figure
                    onClick={() => openModal(src)}
                    tabIndex={-1}
                    className="is-raised-on-hover image is-16by9"
                    style={{
                        background: `radial-gradient(rgba(255, 255, 255, 1), rgba(189, 195, 199, 0.8)), url("${thumbnail}") center center no-repeat`,
                        backgroundSize: 'cover',
                        borderRadius: 4,
                        position: 'relative',
                        cursor: 'pointer'
                    }}
                >
                    <button
                        className="button is-large is-primary has-background-theme"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            filter:
                                'drop-shadow(0 10px 10px rgba(0, 0, 0, 0.1))'
                        }}
                    >
                        <span className="icon is-medium">
                            <i className="fas fa-play" />
                        </span>
                    </button>
                </figure>
                <div
                    onClick={closeModal}
                    className={
                        'modal' + (this.state.modalToggle ? ' is-active' : '')
                    }
                    role="dialog"
                    tabIndex={-1}
                >
                    <div
                        className="modal-background"
                        style={{ cursor: 'pointer' }}
                    />
                    <div
                        className="modal-content"
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            position: 'relative',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <iframe
                            ref={el => (this.iframe = el)}
                            style={{
                                width: '80%',
                                height: '80%',
                                frameBorder: 0
                            }}
                            src={src}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={src}
                        />
                    </div>
                    <button
                        className="modal-close is-large"
                        aria-label="close"
                    />
                </div>
            </>
        )
    }
}
