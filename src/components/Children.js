import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { SmartLink } from '../services/i18n'
import Card from './Card'

export default ({
    match,
    filter,
    layout,
    pageContext,
    children,
    className,
    render
}) => {
    return (
        <StaticQuery
            query={graphql`
                {
                    allSitePage(
                        sort: { order: DESC, fields: context___order }
                    ) {
                        edges {
                            node {
                                id
                                path
                                context {
                                    fileAbsolutePath
                                    layout
                                    date
                                    locale
                                    title
                                    subtitle
                                    description
                                    keywords
                                    image
                                    links {
                                        registration
                                    }
                                }
                            }
                        }
                    }
                }
            `}
            render={data => {
                const { pagePath, locale } = pageContext
                // find match, or only find direct children
                const pattern = new RegExp(
                    match || '^' + pagePath + '/((?!/).)*$'
                )

                let results = data.allSitePage.edges.filter(
                    page =>
                        page.node.context &&
                        page.node.context.locale &&
                        page.node.context.locale === locale &&
                        page.node.path.match(pattern, 'g')
                )

                if (filter) {
                    if (filter.layout)
                        results = results.filter(
                            page =>
                                filter.layout.indexOf(
                                    page.node.context.layout
                                ) > -1
                        )
                    if (filter.sort === 'ASC') results = results.reverse()
                    if (filter.limit) results = results.slice(0, filter.limit)
                }

                return (
                    <>
                        {results.map(page => {
                            let result
                            switch (layout) {
                                case 'link':
                                    result = (
                                        <SmartLink
                                            to={page.node.path}
                                            className={className}
                                            key={page.node.id}
                                            pageContext={pageContext}
                                        >
                                            {page.node.context.title}
                                        </SmartLink>
                                    )
                                    break
                                case 'compact':
                                    result = (
                                        <Card
                                            data={{
                                                to: page.node.path,
                                                links: page.node.context.links,
                                                header: page.node.context.title,
                                                subheader:
                                                    page.node.context.subtitle,
                                                image: page.node.context.image
                                            }}
                                            pageContext={pageContext}
                                            className={className}
                                            key={page.node.id}
                                        />
                                    )
                                    break
                                default:
                                    result = (
                                        <Card
                                            data={{
                                                to: page.node.path,
                                                links: page.node.context.links,
                                                header: page.node.context.title,
                                                subheader:
                                                    page.node.context.subtitle,
                                                description:
                                                    page.node.context
                                                        .description,
                                                date: page.node.context.date,
                                                image: page.node.context.image
                                            }}
                                            pageContext={pageContext}
                                            className={className}
                                            key={page.node.id}
                                        />
                                    )
                            }

                            return render ? render(result) : result
                        })}
                        {children}
                    </>
                )
            }}
        />
    )
}
