import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default ({ pageContext }) => {
    const { common } = pageContext
    const getPosition = () => {
        const popupWidth =
            typeof window !== 'undefined' ? window.screen.width / 2 : 600
        const popupHeight =
            typeof window !== 'undefined' ? window.screen.height / 2 : 400
        return {
            popupWidth: popupWidth,
            popupHeight: popupHeight,
            popupLeft:
                typeof window !== 'undefined'
                    ? window.screen.width / 2 - popupWidth / 2
                    : 0,
            popupTop:
                typeof window !== 'undefined'
                    ? window.screen.height / 2 - popupHeight / 2
                    : 0
        }
    }

    const facebookShare = () => {
        if (typeof window !== 'undefined') {
            const position = getPosition()
            const url =
                'https://www.facebook.com/dialog/share?app_id=310695146144723&href=' +
                encodeURIComponent(window.location.href)

            window.open(
                url,
                '',
                `width=${position.popupWidth}, height=${position.popupHeight}, left=${position.popupLeft}, top=${position.popupTop}, resizable=no`
            )
        }
    }

    return (
        <div>
            <button
                onClick={facebookShare}
                className="button is-primary is-outlined tooltip"
                data-tooltip={common.shareOnFacebook}
            >
                <span className="icon">
                    <i className="fab fa-facebook-f" />
                </span>
            </button>{' '}
            <CopyToClipboard
                text={typeof window !== 'undefined' ? window.location.href : ''}
            >
                <button
                    className="button is-primary is-outlined tooltip"
                    data-tooltip={common.copyToClipboard}
                >
                    <span className="icon">
                        <i className="fas fa-link" />
                    </span>
                </button>
            </CopyToClipboard>
        </div>
    )
}
