import React from 'react'
import {Link} from 'react-router-dom'
import causesimg from '../../images/cause/img-1.webp'
import causesimg2 from '../../images/cause/img-2.webp'
import causesimg3 from '../../images/cause/img-3.webp'
import './style.css'

const Causes = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="case-area section-padding">
            <div className="container">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-title text-center">
                        {/*<div className="thumb-text">*/}
                        {/*    <span>Наші проекти</span>*/}
                        {/*</div>*/}
                        <h2>Наші проекти</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-12">
                        <div className="cause-item">
                            <div className="cause-top">
                                <div className="cause-img">
                                    <img src={causesimg} alt="" />
                                    <div className="case-btn">
                                        <Link onClick={ClickHandler} to="/donate" className="theme-btn">Donate Now<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="cause-text">
                                {/*<ul>*/}
                                {/*    <li><Link onClick={ClickHandler} to="/">GOAL : $9860</Link></li>*/}
                                {/*    <li><Link onClick={ClickHandler} to="/">RISED : $768</Link></li>*/}
                                {/*</ul>*/}
                                <h3><Link onClick={ClickHandler} to="/case-single">Підтримка військових:</Link></h3>
                                <p>Закупівля обладнання, спорядження, транспортних засобів та необхідних матеріалів для наших героїв на передовій.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-12">
                        <div className="cause-item">
                            <div className="cause-top">
                                <div className="cause-img">
                                    <img src={causesimg2} alt="" />
                                    <div className="case-btn">
                                        <Link onClick={ClickHandler} to="/donate" className="theme-btn">Donate Now<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="cause-text">
                                {/*<ul>*/}
                                {/*    <li><Link onClick={ClickHandler} to="/">GOAL : $9860</Link></li>*/}
                                {/*    <li><Link onClick={ClickHandler} to="/">RISED : $768</Link></li>*/}
                                {/*</ul>*/}
                                <h3><Link onClick={ClickHandler} to="/case-single">Допомога ветеранам:</Link></h3>
                                <p>Реабілітація, психологічна підтримка та допомога у поверненні до мирного життя.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-12">
                        <div className="cause-item">
                            <div className="cause-top">
                                <div className="cause-img">
                                    <img src={causesimg3} alt="" />
                                    <div className="case-btn">
                                        <Link onClick={ClickHandler} to="/donate" className="theme-btn">Donate Now<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="cause-text">
                                {/*<ul>*/}
                                {/*    <li><Link onClick={ClickHandler} to="/">GOAL : $9860</Link></li>*/}
                                {/*    <li><Link onClick={ClickHandler} to="/">RISED : $768</Link></li>*/}
                                {/*</ul>*/}
                                <h3><Link onClick={ClickHandler} to="/case-single">Гуманітарні ініціативи:</Link></h3>
                                <p>Допомога постраждалим від війни: родинам військових, переселенцям та тим, хто найбільше потребує підтримки.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btns text-center">
                    <div><Link  onClick={ClickHandler} className="theme-btn" to="/donate">Дізнатися більше про наші проекти</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Causes;