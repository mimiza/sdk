import React, { Component } from 'react'

export default class Notifications extends Component {
    state = {
        notifications: []
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            window.addEventListener('notification', event => {
                this.state.notifications.push(event.detail)
                this.setState({
                    notifications: this.state.notifications
                })
            })
        }
    }

    componentWillUnmount() {
        if (typeof window !== 'undefined')
            window.removeEventListener('notification', null)
    }

    render() {
        const deleteNotification = index => {
            this.state.notifications.splice(index, 1)
            this.setState({
                notifications: this.state.notifications
            })
        }

        return (
            this.state.notifications.length > 0 && (
                <div className="notifications is-absolute column is-12-mobile is-4-tablet is-offset-8-tablet is-3-desktop is-offset-9-desktop is-2-widescreen is-offset-10-widescreen">
                    {this.state.notifications.map((item, index) => {
                        return (
                            <div
                                className={
                                    'notification' +
                                    (item.className ? ` ${item.className}` : '')
                                }
                                key={index}
                            >
                                <button
                                    className="delete"
                                    onClick={() => deleteNotification(index)}
                                    aria-label={
                                        this.props.pageContext.common.close
                                    }
                                ></button>
                                {item.content}
                            </div>
                        )
                    })}
                </div>
            )
        )
    }
}
