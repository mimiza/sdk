export const notify = (content, className) => {
    if (typeof window !== 'undefined')
        window.dispatchEvent(
            new CustomEvent('notification', {
                detail: {
                    content,
                    className
                }
            })
        )
}

export const hash = async data => {
    if (typeof window !== 'undefined') {
        let { sea } = window
        if (typeof data === 'object') data = JSON.stringify(data)
        return await sea.work(data, null, null, {
            name: 'SHA-256'
        })
    }
}

export const signAndHash = async data => {
    if (typeof window !== 'undefined') {
        let { sea, user } = window
        if (user.is && user._ && user._.sea) {
            const signedData = await sea.sign(data, user._.sea)

            const _ = JSON.stringify({
                data: signedData,
                user: { pub: user.is.pub }
            })

            return { data: _, hash: await hash(_) }
        }
        return {}
    }
    return {}
}

export const encodeQuery = data =>
    Object.entries(data)
        .map(_ =>
            _.map(__ =>
                typeof __ === 'object'
                    ? encodeURIComponent(JSON.stringify(__))
                    : encodeURIComponent(__)
            ).join('=')
        )
        .join('&')

export const spintax = text => {
    let matches, options, random
    while ((matches = /{([^{}]+?)}/.exec(text)) !== null) {
        options = matches[1].split('|')
        random = Math.floor(Math.random() * options.length)
        text = text.replace(matches[0], options[random])
    }
    return text
}
