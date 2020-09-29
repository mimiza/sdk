import React from 'react'
import { SmartLink } from '../services/i18n'

export default ({ className, data, pageContext }) => {
    const { common } = pageContext
    return data ? (
        <>
            <SmartLink to={`/tags`} className="subtitle is-uppercase is-7">
                {common.tags}:
            </SmartLink>
            <div className={'tags' + (className ? ` ${className}` : '')}>
                {data.map((element, key) => (
                    <div className="tag" key={key}>
                        <SmartLink to={`/tag/${element}`}>{element}</SmartLink>
                    </div>
                ))}
            </div>
        </>
    ) : null
}
