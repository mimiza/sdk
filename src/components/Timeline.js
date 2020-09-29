import React from 'react'

export default ({ data, className }) => (
    <div className={'timeline' + (className ? ` ${className}` : '')}>
        {data.map((timeline, key) => {
            if (timeline.type === 'header') {
                return (
                    <header className="timeline-header" key={key}>
                        <span
                            className={
                                'tag' +
                                (timeline.className
                                    ? ` ${timeline.className}`
                                    : '')
                            }
                        >
                            {timeline.header}
                        </span>
                    </header>
                )
            } else {
                return (
                    <div
                        className={
                            'timeline-item' +
                            (timeline.className ? ` ${timeline.className}` : '')
                        }
                        key={key}
                    >
                        <div
                            className={
                                'timeline-marker' +
                                (timeline.marker && timeline.marker.className
                                    ? ` ${timeline.marker.className}`
                                    : '') +
                                (timeline.marker &&
                                timeline.marker.className &&
                                timeline.marker.image
                                    ? ' is-image'
                                    : '') +
                                (timeline.marker &&
                                timeline.marker.className &&
                                timeline.marker.icon
                                    ? ' is-icon'
                                    : '')
                            }
                        >
                            {timeline.marker && timeline.marker.image ? (
                                <img
                                    src={timeline.marker.image}
                                    alt={timeline.header}
                                />
                            ) : null}
                            {timeline.marker && timeline.marker.icon ? (
                                <i className={`fas ${timeline.marker.icon}`} />
                            ) : null}
                        </div>
                        <div className="timeline-content">
                            <p className="heading">{timeline.header}</p>
                            <p>{timeline.content}</p>
                        </div>
                    </div>
                )
            }
        })}
    </div>
)
