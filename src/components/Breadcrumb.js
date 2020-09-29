import React from 'react'
import { SmartLink } from '../services/i18n'

export default ({ pageContext, className }) => {
    const breadcrumbs = pageContext.pagePath.split('/')
    let urls = []
    breadcrumbs.map((key, index) => {
        const url = breadcrumbs.slice(0, index + 1).join('/')
        if (url.length) urls.push(url)
        return null
    })
    return (
        <nav className={className || 'breadcrumb'} aria-label="breadcrumbs">
            <ul>
                {urls.map((path, index) => {
                    return (
                        <SmartLink
                            pageContext={pageContext}
                            to={path}
                            render={data => (
                                <li
                                    className={
                                        index === urls.length - 1
                                            ? 'is-active'
                                            : ''
                                    }
                                >
                                    {data}
                                </li>
                            )}
                            key={path}
                        />
                    )
                })}
            </ul>
        </nav>
    )
}
