import React from 'react'

export default ({ pageContext, data, className }) => {
    const { common } = pageContext
    return (
        <aside className="menu">
            <p className="menu-label">{common.tableOfContents}</p>
            <div
                className="menu-list"
                dangerouslySetInnerHTML={{
                    __html: pageContext.tableOfContents
                }}
            />
        </aside>
    )
}
