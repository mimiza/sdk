import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Notifications from '../components/Notifications'
import './layout.scss'

export default ({ pageContext, children, settings }) => {
    const { title, subtitle, description, keywords, locale } = pageContext

    return (
        <StaticQuery
            query={graphql`
                query {
                    site {
                        siteMetadata {
                            title
                            description
                            keywords
                        }
                    }
                }
            `}
            render={data => (
                <>
                    <Helmet
                        title={
                            title
                                ? `${title}${
                                      subtitle ? ' - ' + subtitle : ''
                                  } | ${data.site.siteMetadata.title}`
                                : data.site.siteMetadata.title
                        }
                        meta={[
                            {
                                name: 'description',
                                content:
                                    description ||
                                    data.site.siteMetadata.description
                            },
                            {
                                name: 'keywords',
                                content:
                                    keywords || data.site.siteMetadata.keywords
                            },
                            {
                                name: 'viewport',
                                content: 'width=device-width, initial-scale=1'
                            }
                        ]}
                    >
                        <html lang={locale} className="has-navbar-fixed-top" />
                    </Helmet>
                    {!settings ||
                    (settings &&
                        (typeof settings.header === 'undefined' ||
                            settings.header === true)) ? (
                        <Header
                            pageContext={pageContext}
                            siteTitle={data.site.siteMetadata.title}
                        />
                    ) : null}
                    {children}
                    {!settings ||
                    (settings &&
                        (typeof settings.footer === 'undefined' ||
                            settings.footer === true)) ? (
                        <Footer
                            pageContext={pageContext}
                            siteTitle={data.site.siteMetadata.title}
                        />
                    ) : null}
                    <Notifications pageContext={pageContext} />
                </>
            )}
        />
    )
}
