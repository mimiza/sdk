import React from 'react'
import Feature from './Feature'

export default ({ children, data }) => (
    <div className="features">
        {data.map((element, key) => (
            <Feature data={element} key={key} />
        ))}
        {children}
    </div>
)
