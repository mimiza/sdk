import React from 'react'

export default ({ children, data, className }) => (
    <article
        className={'media' + (className ? ` ${className}` : '')}
        style={{ borderTop: 0 }}
    >
        <figure className="media-left">
            {data.figure && data.figure.image ? (
                <p
                    className={
                        'image is-32x32' +
                        (data.figure.className
                            ? ` ${data.figure.className}`
                            : '')
                    }
                >
                    <img src={data.figure.image} alt={data.header} />
                </p>
            ) : null}

            {!data.figure || (data.figure && !data.figure.image) ? (
                <span
                    className={
                        'icon' +
                        (/\s?is-small\s?/g.test(className)
                            ? ' is-small'
                            : ' is-medium') +
                        (data.figure && data.figure.className
                            ? ` ${data.figure.className}`
                            : ' has-text-success')
                    }
                >
                    <i
                        className={
                            'fas' +
                            (/\s?is-small\s?/g.test(className)
                                ? ''
                                : ' fa-2x ') +
                            (data.figure && data.figure.icon
                                ? ` ${data.figure.icon}`
                                : ' fa-check')
                        }
                    />
                </span>
            ) : null}
        </figure>
        <div className="media-content">
            <div className="content">
                <header
                    className={
                        'title has-text-weight-normal' +
                        (/\s?is-small\s?/g.test(className) ? ' is-6' : ' is-4')
                    }
                >
                    {data && data.header ? data.header : data}
                </header>
                {data && data.subheader ? (
                    <header
                        className={
                            'subtitle has-text-weight-normal' +
                            (/\s?is-small\s?/g.test(className)
                                ? ' is-7'
                                : ' is-6')
                        }
                    >
                        {data.subheader}
                    </header>
                ) : null}
                {data && data.description ? (
                    <p className="has-text-weight-light">{data.description}</p>
                ) : null}
                {children}
            </div>
        </div>
    </article>
)
