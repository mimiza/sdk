const pixelName = '__pixel'

export const setCookie = (key, value, duration) => {
    if (typeof window !== 'undefined') {
        let d = new Date()
        d.setTime(d.getTime() + duration * 24 * 60 * 60 * 1000)
        let expires = 'expires=' + d.toUTCString()
        window.document.cookie = key + '=' + value + ';' + expires + ';path=/'
    }
}

export const getCookie = key => {
    if (typeof window !== 'undefined') {
        let name = key + '='
        let ca = window.document.cookie.split(';')
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i]
            while (c.charAt(0) === ' ') {
                c = c.substr(1)
            }
            if (c.indexOf(name) === 0) {
                return c.substr(name.length, c.length)
            }
        }
    }
    return ''
}

export const getParams = () => {
    if (typeof window !== 'undefined') {
        let items = window.location.search.substr(1).split('&')
        let result = {},
            tmp = []
        for (let i = 0; i < items.length; i++) {
            tmp = items[i].split('=')
            if (tmp.length === 2) result[tmp[0]] = decodeURIComponent(tmp[1])
        }
        return result
    }
    return {}
}

export const getPixel = () => {
    if (typeof window !== 'undefined') {
        let pixel =
            typeof Storage !== 'undefined'
                ? JSON.parse(window.localStorage.getItem(pixelName) || '[]')
                : getCookie(pixelName) !== ''
                ? JSON.parse(getCookie(pixelName))
                : []
        return pixel
    }
    return []
}

export const searchPixel = data => {
    if (typeof window !== 'undefined') {
        const keys = Object.keys(data)
        const pixel = getPixel().filter(item => {
            let state = false
            for (let i = 0; i < keys.length; i++) {
                state =
                    item[keys[i]] &&
                    data[keys[i]] &&
                    item[keys[i]] === data[keys[i]]
                        ? true
                        : false
            }
            return state
        })
        return pixel
    }
    return []
}

export const setPixel = data => {
    if (typeof window !== 'undefined') {
        const url = window.location.href
        data = data || getParams()
        if (data.event && url) {
            const chunk = {
                time: new Date().toUTCString(),
                url,
                ...data
            }
            let pixel = getPixel()
            pixel.push(chunk)
            if (typeof Storage !== 'undefined')
                window.localStorage.setItem(pixelName, JSON.stringify(pixel))
            else setCookie(pixelName, JSON.stringify(pixel), 90)
        }
    }
}
