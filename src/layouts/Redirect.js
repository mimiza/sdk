import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { defaultLocale, redirect } from '../services/i18n'

import Hero from '../components/Hero'
import './layout.scss'
import branding from '../images/branding-inverted.svg'

export default class Redirect extends Component {
    componentDidMount() {
        redirect()
    }

    render() {
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
                render={data => {
                    return (
                        <>
                            <Helmet
                                title={data.site.siteMetadata.title}
                                meta={[
                                    {
                                        name: 'description',
                                        content:
                                            data.site.siteMetadata.description
                                    },
                                    {
                                        name: 'keywords',
                                        content: data.site.siteMetadata.keywords
                                    },
                                    {
                                        name: 'viewport',
                                        content:
                                            'width=device-width, initial-scale=1'
                                    }
                                ]}
                            >
                                <html lang={defaultLocale.code} />
                            </Helmet>
                            <Hero className="is-fullheight has-background-theme is-primary has-text-centered">
                                <img
                                    src={branding}
                                    alt={data.site.siteMetadata.title}
                                />
                            </Hero>
                        </>
                    )
                }}
            />
        )
    }
}
