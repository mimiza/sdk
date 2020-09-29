import React, { Component, Suspense } from 'react'

export default class Block extends Component {
    component = React.lazy(() => import('./' + this.props.component))

    render() {
        return typeof window !== 'undefined' ? (
            <Suspense>
                {React.createElement(this.component, this.props)}
            </Suspense>
        ) : null
    }
}
