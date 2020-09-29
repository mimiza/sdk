import React from 'react'
import { SmartLink } from '../services/i18n'

export default ({ pageContext }) => (
    <SmartLink pageContext={pageContext} to="/products/mimiza-facebulk">
        <header className="title is-5 has-text-centered">
            Send Bulk Messages From Your Facebook Page
        </header>
        <figure className="image">
            <img src="/images/mimiza-facebulk.png" alt="Mimiza FaceBulk" />
        </figure>
    </SmartLink>
)
