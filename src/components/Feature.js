import React from 'react'

export default ({ children, data }) => (
    <article className="media">
        <figure className="media-left">
            <p className="image is-48x48">
                <img src={data.image} />
            </p>
        </figure>
        <div className="media-content">
            <div className="content">
                <header className="title is-4 has-text-weight-normal">
                    {data.title}
                </header>
                <header className="subtitle is-6 has-text-weight-normal">
                    {data.subtitle}
                </header>
                <p>{data.description}</p>
                {children}
            </div>
        </div>
    </article>
)
