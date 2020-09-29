import React from 'react'

export default ({ children, className, image, style }) => {
    let _style = {}
    if (image) {
        if (/\s?has-icon-background-.*\s?/g.test(className))
            _style.backgroundImage = `url("${image}")`
        else {
            _style.background = `url("${image}") no-repeat center center`
            _style.backgroundSize = 'contain'
        }
    }
    style = { ..._style, ...style }
    return (
        <section
            className={'hero' + (className ? ` ${className}` : '')}
            style={style}
        >
            <div className="hero-body">
                {/\s?is-wrapped\s?/g.test(className) ? (
                    <div className="container">{children}</div>
                ) : (
                    children
                )}
            </div>
        </section>
    )
}
