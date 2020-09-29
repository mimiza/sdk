import React, { Component } from 'react'
import { setPixel } from '../services/pixel'

export default class JvzooButton extends Component {
    render() {
        const { data, className, pageContext } = this.props
        const { common, dictionary } = pageContext

        const buttonClicked = () => {
            setPixel({ event: 'JvzooButtonClicked', ...data })
            if (typeof window !== 'undefined')
                window.location = `https://www.jvzoo.com/b/${data.jvzoo}`
        }

        return (
            <button
                onClick={buttonClicked}
                className={
                    'button is-uppercase has-text-weight-bold' +
                    (className ? ` ${className}` : '')
                }
            >
                <span>{common.buyNow}</span>
                <img
                    src={`https://i.jvzoo.com/${data.jvzoo}`}
                    alt={dictionary.title}
                    border="0"
                    width="0"
                    height="0"
                />
            </button>
        )
    }
}
