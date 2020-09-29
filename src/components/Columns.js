import React from 'react'

import List from './List'

export default ({ data, className, render }) => (
    <nav className="columns is-multiline">
        {data.map((element, key) => {
            const item = (
                <>
                    {element.image ? (
                        <div className="has-text-centered">
                            <figure className="image">
                                <img
                                    src={element.image}
                                    alt={element.header}
                                    style={{
                                        maxWidth: 180,
                                        width: '70%',
                                        margin: 'auto'
                                    }}
                                />
                            </figure>
                        </div>
                    ) : null}
                    <br />
                    <header className="title is-4 has-text-primary is-uppercase has-text-weight-bold is-spaced">
                        {element.header}
                    </header>
                    <header className="subtitle is-6 has-text-primary has-text-weight-normal">
                        {element.subheader}
                    </header>
                    {element.description &&
                    Array.isArray(element.description) ? (
                        <List
                            className={className}
                            data={element.description}
                        />
                    ) : element.description ? (
                        element.description
                    ) : null}
                </>
            )

            const result = (
                <div
                    className={
                        'column has-text-centered' +
                        (className ? ` ${className}` : '')
                    }
                    key={key}
                >
                    {render ? render(item) : item}
                </div>
            )

            return result
        })}
    </nav>
)
