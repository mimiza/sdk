import React from 'react'
import Testimonial from './Testimonial'

export default ({ className, data, pageContext }) => {
    let i = true
    return (
        <div
            className={
                'columns is-multiline' + (className ? ` ${className}` : '')
            }
        >
            {data.map((element, key) => {
                i = !i
                return (
                    <div
                        className={
                            'column is-one-third' +
                            (element.className ? ` ${element.className}` : '')
                        }
                        key={key}
                    >
                        <div
                            className={
                                'box is-equal-height is-raised-on-hover' +
                                (i === true
                                    ? ' has-background-success has-background-secondary has-text-light'
                                    : ' has-background-light')
                            }
                        >
                            <Testimonial
                                pageContext={pageContext}
                                data={element}
                                className={i === true ? 'has-text-white' : ''}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
