import React from 'react'
import Plan from './Plan'

export default ({ className, children, data, pageContext }) => (
    <div
        className={'pricing-table columns' + (className ? ` ${className}` : '')}
    >
        {data.map((element, key) => (
            <div
                className={
                    'column is-paddingless' +
                    (element.className ? ` ${element.className}` : '')
                }
                key={key}
            >
                <Plan pageContext={pageContext} data={element} />
            </div>
        ))}
        {children}
    </div>
)
