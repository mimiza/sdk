import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { SmartLink } from '../services/i18n'

export default ({ pageContext }) => {
    return (
        // Generate previous and next links
        <StaticQuery
            query={graphql`
                {
                    allSitePage(
                        sort: {
                            order: ASC
                            fields: [context___order, context___date]
                        }
                    ) {
                        edges {
                            node {
                                path
                                context {
                                    order
                                    title
                                    locale
                                    next
                                    previous
                                }
                            }
                        }
                    }
                }
            `}
            render={data => {
                const { pagePath, locale, common } = pageContext
                const _data = data.allSitePage.edges.filter(
                    page =>
                        page.node.path.replace(/\/[\w\-_]*\/?$/, '') ===
                            pagePath.replace(/\/[\w\-_]*\/?$/, '') &&
                        page.node.context.locale === locale
                )
                const result = _data.map((page, index) => {
                    if (page.node.path === pagePath) {
                        return (
                            <div className="columns" key={index}>
                                {pageContext.previous || _data[index - 1] ? (
                                    <div className="column">
                                        <header className="subtitle is-uppercase is-7">
                                            <SmartLink
                                                pageContext={pageContext}
                                                to={
                                                    pageContext.previous
                                                        ? `${locale}/${pageContext.previous}`
                                                        : _data[index - 1].node
                                                              .path
                                                }
                                            >
                                                ← {common.previous}
                                            </SmartLink>
                                        </header>
                                        <header className="title is-5">
                                            <SmartLink
                                                pageContext={pageContext}
                                                to={
                                                    pageContext.previous
                                                        ? `${locale}/${pageContext.previous}`
                                                        : _data[index - 1].node
                                                              .path
                                                }
                                            />
                                        </header>
                                    </div>
                                ) : null}
                                {pageContext.next || _data[index + 1] ? (
                                    <div className="column has-text-right">
                                        <header className="subtitle is-uppercase is-7">
                                            <SmartLink
                                                pageContext={pageContext}
                                                to={
                                                    pageContext.next
                                                        ? `/${locale}/${pageContext.next}`
                                                        : _data[index + 1].node
                                                              .path
                                                }
                                            >
                                                {common.next} →
                                            </SmartLink>
                                        </header>
                                        <header className="title is-5">
                                            <SmartLink
                                                pageContext={pageContext}
                                                to={
                                                    pageContext.next
                                                        ? `/${locale}/${pageContext.next}`
                                                        : _data[index + 1].node
                                                              .path
                                                }
                                            />
                                        </header>
                                    </div>
                                ) : null}
                            </div>
                        )
                    }
                    return null
                })
                return result
            }}
        />
    )
}
