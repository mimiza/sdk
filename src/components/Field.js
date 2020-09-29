import React from 'react'

export default props => {
    const {
        key,
        onChange = () => {},
        disabled = false,
        fieldContext = null
    } = props

    props = props.data || props

    const input = (
        <input
            name={props.name}
            id={props.name}
            className={
                (['checkbox', 'radio'].indexOf(props.type) == -1
                    ? 'input'
                    : '') + (props.className ? ` ${props.className}` : '')
            }
            type={props.type}
            value={
                (['checkbox', 'radio'].indexOf(props.type) == -1 && fieldContext
                    ? fieldContext
                    : null) || props.value
            }
            placeholder={props.placeholder}
            onChange={onChange}
            aria-label={props.label}
            disabled={disabled}
            checked={
                props.checked ||
                (['checkbox', 'radio'].indexOf(props.type) > -1 && fieldContext
                    ? true
                    : false)
            }
        />
    )

    return (
        <div
            className={
                'control' +
                (props.icon && props.icon.left ? ' has-icons-left' : '') +
                (props.icon && props.icon.right ? ' has-icons-right' : '')
            }
            key={key}
        >
            {props.type === 'checkbox' ? (
                <label className="checkbox" for={props.name}>
                    {input} {props.label}
                </label>
            ) : (
                <>
                    {props.label ? (
                        <label className="label" for={props.name}>
                            {props.label}
                        </label>
                    ) : null}

                    {input}
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
                </>
            )}

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
