import React, { Component } from 'react';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import Gallery_1 from '../../images/gallery/img-9.jpeg';
import Gallery_2 from '../../images/gallery/img-10.jpeg';
import Gallery_3 from '../../images/gallery/img-11.jpeg';
import Gallery_4 from '../../images/gallery/img-12.jpg';
import Gallery_5 from '../../images/gallery/img-5.jpeg';
import Gallery_6 from '../../images/gallery/img-6.jpeg';
import Gallery_7 from '../../images/gallery/img-7.jpeg';
import Gallery_8 from '../../images/gallery/img-8.jpeg';
import Gallery_9 from '../../images/gallery/img-1.jpeg';
import Gallery_10 from '../../images/gallery/img-2.jpeg';
import Gallery_11 from '../../images/gallery/img-3.jpeg';
import Gallery_12 from '../../images/gallery/img-4.jpeg';

import './style.css'

class Gallery2 extends Component {


    render() {

        return (
            <section id="protfolio" className="gallery-section s2 section-padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={Gallery_1}
                                    image={Gallery_1}/>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={Gallery_2}
                                    image={Gallery_2}/>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={Gallery_3}
                                    image={Gallery_3}/>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={Gallery_4}
                                    image={Gallery_4}/>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={Gallery_5}
                                    image={Gallery_5}/>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={Gallery_6}
                                    image={Gallery_6}/>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={Gallery_7}
                                    image={Gallery_7}/>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={Gallery_8}
                                    image={Gallery_8}/>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={Gallery_9}
                                    image={Gallery_9}/>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={Gallery_10}
                                    image={Gallery_10}/>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={Gallery_11}
                                    image={Gallery_11}/>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={Gallery_12}
                                    image={Gallery_12}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Gallery2;