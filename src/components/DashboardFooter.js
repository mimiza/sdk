import React from 'react'
import LocalePicker from './LocalePicker'
import Improve from './Improve'
import branding from '../images/branding-inverted.svg'

import { SmartLink } from '../services/i18n'
import Children from './Children'

export default ({ siteTitle, pageContext }) => {
    const { common } = pageContext
    return (
        <footer className="footer">
            <section className="content has-text-grey-light">
                <section className="section has-text-centered">
                    <img
                        src={branding}
                        alt={siteTitle}
                        style={{ width: 180 }}
                    />
                </section>
            </section>
            <hr className="hr has-background-dark" />
            <section className="content is-small has-text-centered has-text-grey">
                {common.copyright}
                <br />
                <SmartLink
                    className="has-text-grey-light"
                    to="/terms-and-conditions"
                    pageContext={pageContext}
                >
                    {common.terms}
                </SmartLink>{' '}
                <span className="has-text-white has-text-weight-bold">·</span>{' '}
                <SmartLink
                    className="has-text-grey-light"
                    to="/privacy-policy"
                    pageContext={pageContext}
                >
                    {common.privacy}
                </SmartLink>
            </section>
        </footer>
    )
}
