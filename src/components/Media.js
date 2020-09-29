import React from 'react'

import { Link } from 'gatsby'

export default ({ children, data }) => (
    <article className="media">
        {data.image ? (
            <figure className="media-left">
                <Link to={data.path}>
                    <p className="image is-48x48">
                        <img src={data.image} alt={data.header} />
                    </p>
                </Link>
            </figure>
        ) : null}
        <div className="media-content">
            <div className="content">
                <Link to={data.path}>
                    <header className="title is-4 has-text-weight-normal">
                        {data.header}
                    </header>
                    <header className="subtitle is-6">{data.subheader}</header>
                </Link>
                {data.description ? <p>{data.description}</p> : null}
                {children}
            </div>
        </div>
        <div className="media-right">{data.buttons}</div>
    </article>
)
