import React from 'react'

import journalism from '../../assets/journalism.svg'
import newspaper from '../../assets/newspaper.svg'
import news from '../../assets/news.svg'
import envelope from '../../assets/envelope.svg'
import './AboutApp.css'

function AboutApp() {
    return (
        <div className="aboutApp">
            <h3 className="aboutHead1">The News App</h3>
            <h2 className="aboutHead2">Meet the app that puts world's trending news in your hand</h2>
            <div className="aboutAppSections">
            <div className="leftAboutSection">
                {<lottie-player src="https://assets6.lottiefiles.com/packages/lf20_zezv30bd.json"  background="transparent"  speed="1"  style={{width: '100%', height: '70vh'}}  loop autoplay></lottie-player>}
            </div>
            <div className="rightAboutSection">
                <h3 className="aboutHead3">Make your workouts work for you </h3>
                <p className="aboutHead4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>

                <div className="aboutItems">
                    <div className="aboutItemSect">
                        <div className="aboutItemStyle1">
                            <img src={journalism} className ="aboutItemImg" alt="newspaper"/>
                        </div>

                        <p> Lorem Ipsum</p>
                    </div>
                    <div className="aboutItemSect">
                        <div className="aboutItemStyle2">
                            <img src={newspaper} className ="aboutItemImg" alt="newspaper"/>
                        </div>

                        <p> Lorem Ipsum</p>

                    </div>
                    <div className="aboutItemSect">
                        <div className="aboutItemStyle3">
                            <img src={news} className ="aboutItemImg" alt="newspaper"/>
                        </div>

                        <p> Lorem Ipsum</p>

                    </div>
                    <div className="aboutItemSect">
                        <div className="aboutItemStyle4">
                            <img src={envelope} className ="aboutItemImg" alt="newspaper"/>
                        </div>

                        <p> Lorem Ipsum</p>

                    </div>
                </div>
            </div>
            </div>

            <div className="aboutItems2">
                    <div className="aboutItemSect2">
                        <div className="aboutItemStyle1">
                            <img src={journalism} className ="aboutItemImg" alt="newspaper"/>
                        </div>

                        <p> Lorem Ipsum</p>
                    </div>
                    <div className="aboutItemSect2">
                        <div className="aboutItemStyle2">
                            <img src={newspaper} className ="aboutItemImg" alt="newspaper"/>
                        </div>

                        <p> Lorem Ipsum</p>

                    </div>
                    <div className="aboutItemSect2">
                        <div className="aboutItemStyle3">
                            <img src={news} className ="aboutItemImg" alt="newspaper"/>
                        </div>

                        <p> Lorem Ipsum</p>

                    </div>
                    <div className="aboutItemSect2">
                        <div className="aboutItemStyle4">
                            <img src={envelope} className ="aboutItemImg" alt="newspaper"/>
                        </div>

                        <p> Lorem Ipsum</p>

                    </div>
                </div>
        </div>
    )
}

export default AboutApp
