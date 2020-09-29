import React from 'react'
import { graphql } from 'gatsby'

import Layout from './Layout'
import DocHeader from '../components/DocHeader'
import TableOfContents from '../components/TableOfContents'
import Divider from '../components/Divider'
import Tags from '../components/Tags'
import DocFooter from '../components/DocFooter'
import Ads from '../components/Ads'
import SocialButtons from '../components/SocialButtons'

export default ({ data, pageContext }) => {
    const { common, tags, image } = pageContext
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark

    return (
        <Layout pageContext={pageContext}>
            <section
                className={
                    'hero is-primary has-text-centered' +
                    (image ? '' : ' has-background-theme')
                }
                style={
                    image
                        ? {
                              background: `url("${image}") no-repeat center center`,
                              backgroundSize: 'cover'
                          }
                        : {}
                }
            >
                <div
                    className="hero-body"
                    style={{ background: 'rgba(0,0,0,.5)' }}
                >
                    <div className="container" style={{ maxWidth: 960 }}>
                        <header
                            className="title is-2 has-text-weight-bold is-spaced"
                            style={{
                                textShadow: '0px 0px 10px rgba(0,0,0,1)'
                            }}
                        >
                            {frontmatter.title}
                        </header>
                        <header className="subtitle is-4 has-text-weight-light">
                            {frontmatter.subtitle}
                        </header>
                        <Divider className="is-tiny is-centered is-primary" />
                        <time className="is-size-7" dateTime={frontmatter.date}>
                            <span className="icon is-small">
                                <i className="fas fa-clock" />
                            </span>{' '}
                            {common.lastUpdated}: {frontmatter.date}
                        </time>
                    </div>
                </div>
            </section>
            <DocHeader pageContext={pageContext} />
            <div className="columns is-gapless" style={{ marginBottom: 0 }}>
                <div className="column has-background-light is-one-fifth">
                    <div className="column">
                        <TableOfContents pageContext={pageContext} />
                    </div>
                </div>
                <div className="column">
                    <section className="section">
                        <article
                            className="content"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                        <SocialButtons pageContext={pageContext} />
                        <br />
                        <Tags data={tags} pageContext={pageContext} />
                        <div className="is-divider" />
                        <DocFooter pageContext={pageContext} />
                    </section>
                </div>
                <div className="column has-background-light is-one-fifth">
                    <div className="section">
                        <Ads pageContext={pageContext} />
                    </div>
                </div>
            </div>
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
            }
        }
    }
`
