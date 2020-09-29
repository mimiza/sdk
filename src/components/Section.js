import React from 'react'

import Hero from './Hero'
import Divider from './Divider'

export default ({ children, className, data, image }) => (
    <Hero className={className} image={image}>
        <div className="container">
            {data && data.header ? (
                <header
                    className={
                        'title is-2 is-spaced' +
                        (/\s?is-light\s?/g.test(className)
                            ? ' has-text-white'
                            : ' has-text-primary')
                    }
                >
                    {data.header}
                </header>
            ) : null}
            {data && data.subheader ? (
                <header
                    className={
                        'subtitle is-4' +
                        (/\s?is-light\s?/g.test(className)
                            ? ' has-text-light'
                            : ' has-text-grey-dark')
                    }
                >
                    {data.subheader}
                </header>
            ) : null}
            {data ? (
                <Divider
                    className={
                        'is-tiny is-primary' +
                        (/\s?has-text-centered\s?/g.test(className)
                            ? ' is-centered'
                            : /\s?has-text-right\s?/g.test(className)
                            ? ' is-right'
                            : '')
                    }
                />
            ) : null}
            {data && data.description ? (
                <div className="content is-medium">{data.description}</div>
            ) : null}
            {children}
        </div>
    </Hero>
)
