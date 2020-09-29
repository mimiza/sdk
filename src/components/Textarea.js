import React from 'react'

export default props => {
    const {
        key,
        onChange = () => {},
        disabled = false,
        fieldContext = null
    } = props
    props = props.data || props
    return (
        <div className="field" key={key || props.name}>
            {props.label ? (
                <label className="label" for={props.name}>
                    {props.label}
                </label>
            ) : (
                ''
            )}
            <div
                className={
                    'control' +
                    (props.icon && props.icon.left ? ' has-icons-left' : '') +
                    (props.icon && props.icon.right ? ' has-icons-right' : '')
                }
            >
                <textarea
                    name={props.name}
                    id={props.name}
                    className={
                        'textarea' +
                        (props.className ? ` ${props.className}` : '')
                    }
                    children={fieldContext || props.value}
                    onChange={onChange}
                    aria-label={props.label}
                    disabled={disabled}
                />
                {props.icon && props.icon.left ? (
                    <span
                        className={
                            'icon is-left' +
                            (props.icon.left.className
                                ? ` ${props.icon.left.className}`
                                : '')
                        }
                    >
                        <i className={props.icon.left.icon} />
                    </span>
                ) : null}
                {props.icon && props.icon.right ? (
                    <span
                        className={
                            'icon is-right' +
                            (props.icon.right.className
                                ? ` ${props.icon.right.className}`
                                : '')
                        }
                    >
                        <i className={props.icon.right.icon} />
                    </span>
                ) : null}
            </div>
            {props.helper && props.helper.content ? (
                <p
                    className={
                        'help' +
                        (props.helper.className
                            ? ` ${props.helper.className}`
                            : '')
                    }
                >
                    {props.helper.content}
                </p>
            ) : null}
        </div>
    )
}
