import React, { Component } from 'react'
import { createPath } from '../services/i18n'
import GlobalContext from '../services/context'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, navigate } from 'gatsby'

import DashboardHeader from '../components/DashboardHeader'
import DashboardFooter from '../components/DashboardFooter'
import Notifications from '../components/Notifications'
import './layout.scss'

export default class Dashboard extends Component {
    static contextType = GlobalContext

    componentDidMount() {
        const { locale, pagePath } = this.props.pageContext
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                if (
                    !this.context.authenticated ||
                    !(
                        this.context.authenticated &&
                        this.context.access
                            .filter(item => /^(?!_).*$/.test(item))
                            .map(item => createPath(locale, item))
                            .indexOf(pagePath) > -1
                    )
                )
                    navigate('/')
            }, 2000)
        }
    }

    render() {
        const { pageContext, children, settings } = this.props
        const {
            title,
            subtitle,
            description,
            keywords,
            locale,
            pagePath
        } = pageContext

        return this.context.authenticated &&
            this.context.access
                .filter(item => /^(?!_).*$/.test(item))
                .map(item => createPath(locale, item))
                .indexOf(pagePath) > -1 &&
            typeof window !== 'undefined' ? (
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
                                        keywords ||
                                        data.site.siteMetadata.keywords
                                },
                                {
                                    name: 'viewport',
                                    content:
                                        'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
                                }
                            ]}
                        >
                            <html
                                lang={locale}
                                className="has-navbar-fixed-top"
                            />
                        </Helmet>
                        {!settings ||
                        (settings &&
                            (typeof settings.header === 'undefined' ||
                                settings.header === true)) ? (
                            <DashboardHeader
                                pageContext={pageContext}
                                siteTitle={data.site.siteMetadata.title}
                            />
                        ) : null}
                        {children}
                        {!settings ||
                        (settings &&
                            (typeof settings.footer === 'undefined' ||
                                settings.footer === true)) ? (
                            <DashboardFooter
                                pageContext={pageContext}
                                siteTitle={data.site.siteMetadata.title}
                            />
                        ) : null}
                        <Notifications pageContext={pageContext} />
                    </>
                )}
            />
        ) : null
    }
}
