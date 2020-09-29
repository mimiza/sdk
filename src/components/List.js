import React from 'react'
import ListItem from './ListItem'

export default ({ children, data, className }) => (
    <div>
        {data.map((element, key) => (
            <ListItem className={className} data={element} key={key} />
        ))}
        {children}
    </div>
)
