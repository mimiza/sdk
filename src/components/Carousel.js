import React, { Component } from 'react'
import bulmaCarousel from 'bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js'

export default class Carousel extends Component {
    render() {
        return (
            <div
                className="carousel carousel-animated carousel-animate-slide"
                {...this.props}
            >
                <div className="carousel-container">
                    {this.props.data.map((item, key) => (
                        <div className="carousel-item has-background" key={key}>
                            <img className="is-background" src={item.image} />
                            <div className="title">{item.title}</div>
                        </div>
                    ))}
                </div>
                <div className="carousel-navigation">
                    <div className="carousel-nav-left">
                        <i className="fas fa-chevron-left" aria-hidden="true" />
                    </div>
                    <div className="carousel-nav-right">
                        <i
                            className="fas fa-chevron-right"
                            aria-hidden="true"
                        />
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let carousels = document.querySelectorAll('.carousel, .hero-carousel')
        carousels = bulmaCarousel.attach()
    }
}
