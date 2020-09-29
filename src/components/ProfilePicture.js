import React, { Component } from 'react'
import Canvas from './Canvas'
import Modal from './Modal'
import Upload from './Upload'
import Button from './Button'

export default class extends Component {
    state = {
        canvasWidth: 0,
        canvasHeight: 0
    }
    saveWidth = 360
    saveHeight = 360
    modal = React.createRef()
    canvas = React.createRef()

    componentDidMount() {
        if (typeof window !== 'undefined') {
            let { user } = window
            ;(async () => {
                const profilePicture = await user.get('profile').get('picture')
                if (profilePicture)
                    this.setState({ profilePictureRes: profilePicture })
            })()
        }
    }

    render() {
        const { pageContext } = this.props
        const { common } = pageContext

        return (
            <>
                {this.state.profilePictureRes ? (
                    <figure
                        className="image is-128x128"
                        style={{ margin: '0 auto 0.75rem auto' }}
                    >
                        <img
                            src={this.state.profilePictureRes}
                            className="is-rounded"
                        />
                    </figure>
                ) : null}
                <Upload
                    pageContext={pageContext}
                    callback={data => {
                        this.setState({ profilePictureSrc: data })
                        this.modal.current.openModal()
                    }}
                    className="is-centered"
                />
                <Modal
                    pageContext={pageContext}
                    ref={this.modal}
                    callback={(w, h) => {
                        const size = Math.min(w, h)
                        if (size > 0)
                            this.setState({
                                canvasWidth: size,
                                canvasHeight: size
                            })
                    }}
                    scrollBar={false}
                    className="has-text-centered"
                    layout="card"
                    header={{
                        title: common.profilePicture
                    }}
                    body={{
                        children: (
                            <Canvas
                                src={this.state.profilePictureSrc}
                                ref={this.canvas}
                                width={this.state.canvasWidth}
                                height={this.state.canvasWidth}
                                saveWidth={this.saveWidth}
                                saveHeight={this.saveHeight}
                                callback={data => {
                                    if (typeof window !== 'undefined') {
                                        let { user } = window
                                        user.get('profile')
                                            .get('picture')
                                            .put(data)
                                    }
                                    this.setState({ profilePictureRes: data })
                                }}
                            />
                        )
                    }}
                    footer={{
                        children: (
                            <Button
                                className="is-primary"
                                onClick={() => {
                                    this.canvas.current.save()
                                    this.modal.current.closeModal()
                                }}
                                label={common.save}
                            />
                        )
                    }}
                />
            </>
        )
    }
}
