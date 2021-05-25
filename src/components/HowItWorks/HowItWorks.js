import React from 'react'

import brain from '../../assets/brain.svg'
import newspaper from '../../assets/newspaper.svg'
import trophy from '../../assets/trophy.svg'

import './HowItWorks.css'

function HowItWorks() {
    return (
        <div className="howItWorks">
            <h3 className="howItWorksHead1">How it works</h3>
            <h2 className="howItWorksHead2">Save time by choosing us.</h2>
            <div className="workItems">
                <div className="item">
                    <div className="itemStyle1">
                        <img src={brain} alt="think" className ="itemImg" />
                    </div>
                    <div className="itemCont">
                        <h3>Logical news</h3>
                        <p style={{fontWeight:'bold', color:'gray'}}>we save you from useless and fake news by providing logical and verified new.</p>
                    </div>
                </div>
                <div className="item">
                    <div className="itemStyle2">
                        <img src={newspaper} className ="itemImg" alt="newspaper"/>
                    </div>
                    <div className="itemCont">
                        <h3>Consumable</h3>
                        <p style={{fontWeight:'bold', color:'gray'}}>we provide news in short video formats and follow long term news in story format's.</p>
                    </div>
                </div>
                <div className="item">
                    <div className="itemStyle3">
                        <img src={trophy} className ="itemImg" alt="trophy" />
                    </div>
                    <div className="itemCont">
                        <h3>At first place</h3>
                        <p style={{fontWeight:'bold', color:'gray'}}>Newsefy delivers short and also informative news.It's because we want our user to get more information in less time </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
