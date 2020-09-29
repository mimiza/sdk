import React from 'react'
import LocalePicker from '../components/LocalePicker'
import Improve from '../components/Improve'
import branding from '../images/branding-inverted.svg'

import { SmartLink } from '../services/i18n'
import Children from '../components/Children'

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
                {/* <div className="columns is-multiline">
                    <div className="column">
                        <header className="title is-uppercase is-6 has-text-light">
                            Mimiza Technologies
                        </header>
                        <span>
                            <b>Addr:</b> CT7F The Sparks, Duong Noi, Ha Dong,
                            <br />
                            Ha noi, Viet nam
                            <br />
                            <b>Phone:</b> +84-911-199-010
                            <br />
                            <b>Email:</b> support@mimiza.com
                        </span>
                        <br />
                        <a
                            href="https://www.youtube.com/channel/UCH57zkwoe0jqibLWW_mLoqA"
                            target="_blank"
                            rel="noreferrer"
                            className="icon is-medium "
                        >
                            <i className="fab fa-lg fa-youtube has-text-danger" />
                        </a>
                        <a
                            href="https://www.facebook.com/MimizaTech"
                            target="_blank"
                            rel="noreferrer"
                            className="icon is-medium has-text-link"
                        >
                            <i className="fab fa-lg fa-facebook has-text-link" />
                        </a>
                    </div>
                    <div className="column">
                        <header className="title is-uppercase is-6 has-text-light">
                            {common.products}
                        </header>
                        <ul>
                            <li>
                                <SmartLink
                                    className="has-text-grey-light"
                                    to="/products/mimiza-facebulk"
                                    pageContext={pageContext}
                                >
                                    Mimiza FaceBulk
                                </SmartLink>
                            </li>
                        </ul>
                    </div>
                    <div className="column">
                        <header className="title is-uppercase is-6 has-text-light">
                            {common.blog}
                        </header>
                        <ul className="latest-posts">
                            <Children
                                match="^/\w+/blog/"
                                layout="link"
                                filter={{ limit: 3, layout: ['doc'] }}
                                pageContext={pageContext}
                                className="has-text-light"
                                render={data => <li key={data.key}>{data}</li>}
                            />
                        </ul>
                    </div>
                    <div className="column has-text-right">
                        <header className="title is-uppercase is-6 has-text-light">
                            {common.usefulLinks}
                        </header>
                        <ul>
                            <li>
                                <SmartLink
                                    className="has-text-grey-light"
                                    to="/about"
                                    pageContext={pageContext}
                                >
                                    {common.about}
                                </SmartLink>
                            </li>
                            <li>
                                <SmartLink
                                    className="has-text-grey-light"
                                    to="/contact"
                                    pageContext={pageContext}
                                >
                                    {common.contact}
                                </SmartLink>
                            </li>
                            <li>
                                <SmartLink
                                    className="has-text-grey-light"
                                    to="/blog"
                                    pageContext={pageContext}
                                >
                                    {common.blog}
                                </SmartLink>
                            </li>
                            <li>
                                <SmartLink
                                    className="has-text-grey-light"
                                    to="/docs"
                                    pageContext={pageContext}
                                >
                                    {common.documentation}
                                </SmartLink>
                            </li>
                            <li>
                                <Improve
                                    pageContext={pageContext}
                                    className="has-text-success"
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="column is-full">
                        <LocalePicker pageContext={pageContext} />
                    </div>
                </div> */}
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
