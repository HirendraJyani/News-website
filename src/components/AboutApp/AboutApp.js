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
            {<lottie-player src="https://assets1.lottiefiles.com/packages/lf20_omx0dcm2.json"  background="transparent"  speed="1"  style={{width: '100%', height: '60vh'}}  loop autoplay></lottie-player>}
                {/* {<lottie-player src="https://assets6.lottiefiles.com/packages/lf20_zezv30bd.json"  background="transparent"  speed="1"  style={{width: '100%', height: '70vh'}}  loop autoplay></lottie-player>} */}
            </div>
            <div className="rightAboutSection">
                <h3 className="aboutHead3">Start your day with short and infomative news </h3>
                <p className="aboutHead4">This app will provide you 30 second videos which will give you lot of information that you need to know.</p>

                <div className="aboutItems">
                    <div className="aboutItemSect">
                        <div className="aboutItemStyle1">
                            <img src={journalism} className ="aboutItemImg" alt="newspaper"/>
                        </div>

                        <p> Unbiased News</p>
                    </div>
                    <div className="aboutItemSect">
                        <div className="aboutItemStyle2">
                            <img src={newspaper} className ="aboutItemImg" alt="newspaper"/>
                        </div>

                        <p> Trending News</p>

                    </div>
                    <div className="aboutItemSect">
                        <div className="aboutItemStyle3">
                            <img src={news} className ="aboutItemImg" alt="newspaper"/>
                        </div>

                        <p> Latest News</p>

                    </div>
                    <div className="aboutItemSect">
                        <div className="aboutItemStyle4">
                            <img src={envelope} className ="aboutItemImg" alt="newspaper"/>
                        </div>

                        <p>Short but Informative</p>

                    </div>
                </div>
            </div>
            </div>

            <div className="aboutItems2">
                    <div className="aboutItemSect2">
                        <div className="aboutItemStyle1">
                            <img src={journalism} className ="aboutItemImg" alt="newspaper"/>
                        </div>

                        <p> Unbiased News</p>
                    </div>
                    <div className="aboutItemSect2">
                        <div className="aboutItemStyle2">
                            <img src={newspaper} className ="aboutItemImg" alt="newspaper"/>
                        </div>

                        <p> Trending News</p>

                    </div>
                    <div className="aboutItemSect2">
                        <div className="aboutItemStyle3">
                            <img src={news} className ="aboutItemImg" alt="newspaper"/>
                        </div>

                        <p> Latest News</p>

                    </div>
                    <div className="aboutItemSect2">
                        <div className="aboutItemStyle4">
                            <img src={envelope} className ="aboutItemImg" alt="newspaper"/>
                        </div>

                        <p> Short but Informative</p>

                    </div>
                </div>
        </div>
    )
}

export default AboutApp
