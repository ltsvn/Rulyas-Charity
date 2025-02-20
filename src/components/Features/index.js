import React from 'react'
import './style.css'

const Features = (props) => {

    return(
        <div className={`features-area ${props.Features}`}>
            <div className="container">
                <div className="title section-title text-center my-3 ">
                    <h2>Як ви можете допомогти:</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="features-item-2">
                            <div className="features-icon">
                                <i className="fi flaticon-salad"></i>
                            </div>
                            <div className="features-content">
                                <h3>Фінансова підтримка:</h3>
                                <p>навіть найменший внесок робить велику різницю.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="features-item-2">
                            <div className="features-icon">
                                <i className="fi flaticon-school"></i>
                            </div>
                            <div className="features-content">
                                <h3>Інформаційна підтримка:</h3>
                                <p>розкажіть про нас друзям та родині.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="features-item-2">
                            <div className="features-icon">
                                <i className="fi flaticon-medicine"></i>
                            </div>
                            <div className="features-content">
                                <h3>Гуманітарна допомога:</h3>
                                <p>ми завжди відкриті до співпраці.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;