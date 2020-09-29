import React from 'react'
import Divider from './Divider'

export default ({ children, data, className }) => (
    <>
        {data.image ? (
            <div
                className={'is-flex' + (className ? ` ${className}` : '')}
                style={{ justifyContent: 'center' }}
            >
                <figure className="image is-128x128">
                    <img
                        className="is-rounded"
                        src={data.image}
                        alt={data.header ? data.header : null}
                    />
                </figure>
            </div>
        ) : null}
        <br />
        <div className="content">
            {data.header ? (
                <>
                    <header
                        className={
                            'title is-5 has-text-weight-normal' +
                            (className ? ` ${className}` : '')
                        }
                    >
                        {data.header}
                    </header>
                    <Divider className="is-tiny is-centered is-primary" />
                </>
            ) : null}
            {data.description ? (
                <p className="has-text-weight-light">{data.description}</p>
            ) : null}
            {data.footer ? (
                <span className="is-small">
                    <i>{data.footer}</i>
                </span>
            ) : null}
            {children}
        </div>
    </>
)
