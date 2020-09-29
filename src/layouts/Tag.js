import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from './Layout'
import DocHeader from '../components/DocHeader'
import Card from '../components/Card'

export default ({ pageContext }) => {
    const { locale, common, tag } = pageContext
    return (
        <Layout pageContext={pageContext}>
            <section className="hero has-background-theme is-primary has-text-centered">
                <div className="hero-body">
                    <div className="container content">
                        <header className="title is-2 has-text-weight-light is-spaced">
                            {common.tag}: {pageContext.header}
                        </header>
                        <header className="subtitle is-4 has-text-weight-light">
                            {pageContext.subheader}
                        </header>
                    </div>
                </div>
            </section>
            <DocHeader pageContext={pageContext} />
            <section className="section">
                <div className="container">
                    <div className="columns is-multiline">
                        <StaticQuery
                            query={graphql`
                                {
                                    allSitePage(
                                        sort: {
                                            order: DESC
                                            fields: context___order
                                        }
                                        filter: {
                                            context: { tags: { ne: null } }
                                        }
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
                                                    tags
                                                }
                                            }
                                        }
                                    }
                                }
                            `}
                            render={data => {
                                return data.allSitePage.edges
                                    .filter(
                                        page =>
                                            page.node.context &&
                                            page.node.context.locale &&
                                            page.node.context.locale ===
                                                locale &&
                                            page.node.context.tags.indexOf(
                                                tag
                                            ) > -1
                                    )
                                    .map(page => {
                                        return (
                                            <div
                                                key={page.node.id}
                                                className="column is-one-third"
                                            >
                                                <Card
                                                    data={{
                                                        to: page.node.path,
                                                        header:
                                                            page.node.context
                                                                .title,
                                                        description:
                                                            page.node.context
                                                                .description,
                                                        date:
                                                            page.node.context
                                                                .date
                                                    }}
                                                    pageContext={pageContext}
                                                />
                                            </div>
                                        )
                                    })
                            }}
                        />
                    </div>
                </div>
            </section>
        </Layout>
    )
}
