import items from './items.json'

export default items

export const getItem = data => {
    data = data || {}
    const keys = Object.keys(data)
    const result = items.filter(item => {
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
    return result[0] || {}
}

export const searchItem = data => {
    data = data || {}
    const keys = Object.keys(data)
    const result = items.filter(item => {
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
    return result
}
