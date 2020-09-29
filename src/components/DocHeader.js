import React from 'react'
import Breadcrumb from './Breadcrumb'
import PageLocalePicker from './PageLocalePicker'

export default ({ pageContext }) => (
    <section
        className="doc-header section has-background-white-lighter"
        style={{ padding: '0.5rem 0.75rem' }}
    >
        <div className="level is-mobile">
            <div
                className="level-left"
                style={{ overflowX: 'auto', flexShrink: 1 }}
            >
                <div className="level-item">
                    <Breadcrumb pageContext={pageContext} />
                </div>
            </div>
            <div className="level-right has-text-right">
                <div className="level-item">
                    <PageLocalePicker pageContext={pageContext} />
                </div>
            </div>
        </div>
    </section>
)
