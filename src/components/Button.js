import React from 'react'

export default props => {
    const { key, onClick = () => {}, disabled = false } = props
    props = props.data || props

    const result = (
        // <div className="control" key={key || props.name}>
        <button
            name={props.name}
            className={
                'button' + (props.className ? ` ${props.className}` : '')
            }
            onClick={onClick}
            disabled={disabled}
            type={props.type === 'reset' ? 'reset' : 'submit'}
        >
            {props.icon && props.icon.left ? (
                <span
                    className={
                        'icon' +
                        (props.icon.left.className
                            ? ` ${props.icon.left.className}`
                            : '')
                    }
                >
                    <i className={props.icon.left.icon} />
                </span>
            ) : null}
            {props.label || props.children ? (
                <span>
                    {props.label}
                    {props.children}
                </span>
            ) : (
                ''
            )}
            {props.icon && props.icon.right ? (
                <span
                    className={
                        'icon' +
                        (props.icon.right.className
                            ? ` ${props.icon.right.className}`
                            : '')
                    }
                >
                    <i className={props.icon.right.icon} />
                </span>
            ) : null}
        </button>
        // </div>
    )

    return props.render ? props.render(result) : result
}
