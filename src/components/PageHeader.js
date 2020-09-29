import React from 'react'
import Hero from './Hero'
import PageSubHeader from './PageSubHeader'

export default ({ pageContext, children }) => {
    const { dictionary, image } = pageContext
    return (
        <>
            <Hero
                className={
                    'has-background-theme is-medium is-primary has-text-centered' +
                    (image ? '' : ' has-background-theme')
                }
                pageContext={pageContext}
            >
                <div className="container" style={{ maxWidth: 960 }}>
                    <header className="title is-1 has-text-weight-light is-spaced">
                        {dictionary.header}
                    </header>
                    <header className="subtitle is-3 has-text-weight-light">
                        {dictionary.subheader}
                    </header>
                    {children}
                </div>
            </Hero>
            <PageSubHeader pageContext={pageContext} />
        </>
    )
}
