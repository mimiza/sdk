import React from 'react'

export default ({ data }) => (
    <div
        className={
            'pricing-plan' + (data.className ? ` ${data.className}` : '')
        }
    >
        <div className="plan-header">{data.header}</div>
        <div className="plan-price">
            <span className="plan-price-amount">
                <span className="plan-price-currency">
                    {data.currency}{' '}
                    <strike className="has-text-weight-bold has-text-danger">
                        {data.price}
                    </strike>
                </span>
                {data.salePrice}
            </span>
            /{data.duration}
        </div>
        <div className="plan-items">
            {data.items.map((item, key) => (
                <div className="plan-item" key={key}>
                    {item}
                </div>
            ))}
        </div>
        <div className="plan-footer">
            {typeof data.button === 'string' ? (
                <button className="button is-uppercase has-text-weight-bold is-fullwidth">
                    {data.button}
                </button>
            ) : (
                data.button
            )}
        </div>
    </div>
)
