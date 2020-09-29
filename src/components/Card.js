import React from 'react'
import { Link } from 'gatsby'

export default props => {
    const {
        pageContext,
        children,
        data = {},
        onClick = () => {},
        headerNav,
        footerNav,
        className
    } = props
    const { common } = pageContext

    const result = (
        <div
            className={'card' + (className ? ` ${className}` : '')}
            style={{
                borderRadius: 6
            }}
            onClick={onClick}
        >
            {data.title || data.state || headerNav ? (
                <div className="card-header">
                    <header className="card-header-title">{data.title}</header>
                    <div className="card-header-icon">
                        <nav className="level is-mobile">
                            <div className="level-left"></div>
                            <div className="level-right">
                                {typeof data.state !== 'undefined' ? (
                                    <div className="level-item">
                                        <span
                                            className={
                                                'icon is-small' +
                                                (data.state === true
                                                    ? ` has-text-success`
                                                    : ` has-text-grey-light`)
                                            }
                                        >
                                            <i className="fas fa-circle"></i>
                                        </span>
                                    </div>
                                ) : null}
                                {headerNav ? headerNav : null}
                            </div>
                        </nav>
                    </div>
                </div>
            ) : null}
            {data.image ? (
                <div className="card-image">
                    <figure
                        className="image 4by3"
                        style={{
                            background: `url("${data.image}") no-repeat center center`,
                            backgroundSize: 'cover',
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                            height: '20rem'
                        }}
                    >
                        {data.to ? (
                            <Link
                                to={data.to}
                                className="card-header-title is-size-5 has-text-primary has-text-weight-normal"
                                style={{ height: '100%' }}
                            />
                        ) : null}
                    </figure>
                </div>
            ) : null}
            <>
                <div className="card-content">
                    {data.header ? (
                        <header className="title has-text-primary has-text-weight-normal">
                            {data.to ? (
                                <Link
                                    to={data.to}
                                    className="has-text-primary has-text-weight-normal"
                                >
                                    {data.header ? data.header : null}
                                </Link>
                            ) : (
                                data.header
                            )}
                        </header>
                    ) : null}
                    {data.subheader ? (
                        <header className="subtitle">{data.subheader}</header>
                    ) : null}
                    {data.description ? <p>{data.description}</p> : null}
                    {children}
                    {data.date ? (
                        <>
                            <br />
                            <time
                                className="is-size-7 has-text-grey"
                                dateTime={data.date}
                            >
                                <span className="icon is-small has-text-dark">
                                    <i className="fas fa-clock" />
                                </span>{' '}
                                {common.lastUpdated}: {data.date}
                            </time>
                        </>
                    ) : null}
                </div>
                <footer className="card-footer">
                    {data.to ? (
                        <Link to={data.to} className="card-footer-item">
                            {common.readMore}
                        </Link>
                    ) : null}
                    {data.links && data.links.length ? (
                        <>
                            {data.links.map(_data => {
                                const key = Object.keys(_data)[0]
                                return (
                                    <Link
                                        to={_data[key]}
                                        target={
                                            /^http/gi.test(_data[key])
                                                ? '_blank'
                                                : '_self'
                                        }
                                        className="card-footer-item"
                                    >
                                        {common[key]}
                                    </Link>
                                )
                            })}
                        </>
                    ) : null}
                    {footerNav ? footerNav : null}
                </footer>
            </>
        </div>
    )

    return props.render ? props.render(result) : result
}
