import Gun from 'gun'
import 'gun/sea'
import 'gun/lib/radix'
import 'gun/lib/radisk'
import 'gun/lib/store'
import 'gun/lib/rindexed'
import 'gun/nts'

import React, { Component } from 'react'
import { access } from './access'
import config from './../../config'

const defaultState = {
    authenticated: false,
    username: null,
    access: []
}

const GlobalContext = React.createContext(defaultState)

export class GlobalContextProvider extends Component {
    _mounted = false

    state = defaultState

    constructor(props) {
        super(props)

        if (window && !(window.gun || window.user || window.sea)) {
            // window.gun = Gun({
            //     peers: ['https://database-01.mimiza.com:8765/gun'],
            //     s3: {
            //         key: process.env.AWS_KEY,
            //         secret: process.env.AWS_SECRET,
            //         bucket: process.env.AWS_BUCKET,
            //     },
            // })
            window.gun = Gun({ peers: config.peers })
            window.user = window.gun.user()
            window.sea = Gun.SEA
            window.logOut = new CustomEvent('logOut')
            window.authenticated = new CustomEvent('authenticated')

            const url = new URL(window.location)
            const searchParams = url.searchParams
            if (
                searchParams.has('ref') &&
                !window.localStorage.getItem('ref')
            ) {
                window.localStorage.setItem('ref', searchParams.get('ref'))
            }
        }
    }

    UNSAFE_componentWillMount() {
        this._mounted = true
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            let { gun, user, authenticated } = window

            window.addEventListener('logOut', () => {
                this.setState(defaultState)
            })

            window.addEventListener('authenticated', async () => {
                if (user.is) {
                    this.setState({
                        authenticated: true,
                        access: access(user.is)
                    })

                    user.get('profile')
                        .map()
                        .on((data, key) => {
                            if (this._mounted) this.setState({ [key]: data })
                        })
                }
            })

            gun.on('auth', ack => {
                if (ack.err) console.error(ack.err)
                else if (user.is && user._.sea)
                    window.dispatchEvent(authenticated)
            })

            if (localStorage.getItem('pair'))
                sessionStorage.setItem('pair', localStorage.getItem('pair'))

            user.recall({ sessionStorage: true })
        }
    }

    componentWillUnmount() {
        this._mounted = false
        if (typeof window !== 'undefined')
            window.removeEventListener('authenticated', null)
    }

    render() {
        return (
            <GlobalContext.Provider value={this.state}>
                {this.props.children}
            </GlobalContext.Provider>
        )
    }
}

export default GlobalContext
