import React from 'react'
export default ({ className, style }) => (
    <div
        className={'is-divider' + (className ? ` ${className}` : '')}
        style={{
            ...style,
            borderTopWidth: 1,
            marginLeft: /\s?is-centered\s?/g.test(className)
                ? 'auto'
                : /\s?is-right\s?/g.test(className)
                ? 'auto'
                : null,
            marginRight: /\s?is-centered\s?/g.test(className)
                ? 'auto'
                : /\s?is-right\s?/g.test(className)
                ? 0
                : null,
            width: /\s?is-small\s?/g.test(className)
                ? 200
                : /\s?is-tiny\s?/g.test(className)
                ? 100
                : null
        }}
    />
)
