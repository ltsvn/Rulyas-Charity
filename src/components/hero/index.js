import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero2 from '../../images/slider/slide-3.webp'
import hero3 from '../../images/slider/slide-4.jpg'

import './style.css'



class Hero extends Component {
    render() {

        var settings = {
            dots: false,
            arrows: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true
        };

        return (
            <section className="hero hero-slider hero-style-1">
                <Slider {...settings}>
                    <div className="slide">
                        <div className="slide-inner" style={{ backgroundImage: `url(${this.props.Hero})` }}>
                            <div className="container">
                                <div className="col col-lg-6 slide-caption">
                                    <div className="slide-title">
                                        <h2>Разом до перемоги:<span>підтримайте тих, хто боронить нашу свободу!</span></h2>
                                    </div>
                                    <div className="slide-subtitle">
                                        <p>Допоможіть нашим героям сьогодні, щоб вони змогли захищати наше завтра.</p>
                                    </div>
                                    <div className="btns">
                                        <Link to="/donate" className="theme-btn">Підтримати зараз</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide-inner" style={{ backgroundImage: `url(${hero2})` }}>
                             <div className="container">
                                <div className="col col-lg-6 slide-caption">
                                    <div className="slide-title">
                                        <h2>Разом до перемоги:<span>підтримайте тих, хто боронить нашу свободу!</span></h2>
                                    </div>
                                    <div className="slide-subtitle">
                                        <p>Допоможіть нашим героям сьогодні, щоб вони змогли захищати наше завтра.</p>
                                    </div>
                                    <div className="btns">
                                        <Link to="/donate" className="theme-btn">Підтримати зараз</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide-inner" style={{ backgroundImage: `url(${hero3})` }}>
                            <div className="container">
                                <div className="col col-lg-6 slide-caption">
                                    <div className="slide-title">
                                        <h2>Разом до перемоги:<span>підтримайте тих, хто боронить нашу свободу!</span></h2>
                                    </div>
                                    <div className="slide-subtitle">
                                        <p>Допоможіть нашим героям сьогодні, щоб вони змогли захищати наше завтра.</p>
                                    </div>
                                    <div className="btns">
                                        <Link to="/donate" className="theme-btn">Підтримати зараз</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        )
    }
}

export default Hero;