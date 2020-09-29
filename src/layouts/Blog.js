import React from 'react'
import { graphql } from 'gatsby'

import Layout from './Layout'
import DocHeader from '../components/DocHeader'
import Children from '../components/Children'
export default ({ data, pageContext }) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark

    return (
        <Layout pageContext={pageContext}>
            <section className="hero has-background-theme is-primary has-text-centered">
                <div className="hero-body">
                    <div className="container content">
                        <header className="title is-2 has-text-weight-light is-spaced">
                            {frontmatter.title}
                        </header>
                        <header className="subtitle is-4 has-text-weight-light">
                            {frontmatter.subtitle}
                        </header>
                    </div>
                </div>
            </section>
            <DocHeader pageContext={pageContext} />
            {html ? (
                <>
                    <section className="section">
                        <div className="container">
                            <article
                                className="content"
                                dangerouslySetInnerHTML={{ __html: html }}
                            />
                        </div>
                    </section>
                    <div
                        className="container is-divider"
                        style={{ margin: '0 auto' }}
                    />
                </>
            ) : null}
            <section className="section has-background-light">
                <div className="container">
                    <div className="columns is-multiline">
                        <Children
                            filter={{ sort: frontmatter.sort }}
                            layout="compact"
                            className="is-equal-height is-raised-on-hover"
                            pageContext={pageContext}
                            render={data => (
                                <div key={data.key} className="column is-half">
                                    {data}
                                </div>
                            )}
                        />
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export const query = graphql`
    query($fileAbsolutePath: String!) {
        markdownRemark(fileAbsolutePath: { eq: $fileAbsolutePath }) {
            html
            frontmatter {
                layout
                date(formatString: "MMMM DD, YYYY")
                slug
                title
                subtitle
                description
                sort
            }
        }
    }
`
