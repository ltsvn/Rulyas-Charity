import React from 'react'
import {Link} from 'react-router-dom'
import VideoModal from  '../ModalVideo'
import abimg2 from '../../images/img-1.png'
import './style.css'

const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="about-style-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 col-12">
                        <div className="about-img">
                            <img src={props.AbImg} alt=""/>
                            {/*<VideoModal/>*/}
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-12">
                        <div className="about-content">
                            <div className="section-title">
                                <h2>Хто ми?</h2>
                            </div>
                            <p>Благодійний Фонд Позивний «Руля» створений з любов’ю та вдячністю в пам’ять про Героя з позивним «Руля», який віддав своє життя за свободу України. Засновником фонду є його батько, військовослужбовець, який не з чуток знає про біль втрати.</p>
                            <p> Цей фонд — це спосіб перетворити скорботу в силу. Його місія — підтримати наших захисників, щоб вони якнайшвидше здобули перемогу і зупинили хвилю втрат, які ламають серця родин по всій країні.</p>
                            <p> Ми віримо, що кожна людина може зробити свій внесок у перемогу. Разом ми сильніші, разом ми здатні побудувати майбутнє, де більше ніхто не буде втрачати своїх рідних і друзів через війну.</p>
                            <div className="btns">
                                <div><Link  onClick={ClickHandler} className="theme-btn" to="/donate">Дізнатися більше про наші проекти</Link></div>
                            </div>
                            {/*<div className="signature">*/}
                            {/*    <img src={abimg2} alt=""/>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;