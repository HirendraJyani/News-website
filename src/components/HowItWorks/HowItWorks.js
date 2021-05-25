import React from 'react'

import brain from '../../assets/brain.svg'
import newspaper from '../../assets/newspaper.svg'
import trophy from '../../assets/trophy.svg'

import './HowItWorks.css'

function HowItWorks() {
    return (
        <div className="howItWorks">
            <h3 className="howItWorksHead1">How it works</h3>
            <h2 className="howItWorksHead2">Create Your Own Journey</h2>
            <div className="workItems">
                <div className="item">
                    <div className="itemStyle1">
                        <img src={brain} alt="think" className ="itemImg" />
                    </div>
                    <div className="itemCont">
                        <h3>Get Information</h3>
                        <p style={{fontWeight:'bold', color:'gray'}}>All the unbiased news information in your hand from all over the world in just 30 second short videos.</p>
                    </div>
                </div>
                <div className="item">
                    <div className="itemStyle2">
                        <img src={newspaper} className ="itemImg" alt="newspaper"/>
                    </div>
                    <div className="itemCont">
                        <h3>Get Latest</h3>
                        <p style={{fontWeight:'bold', color:'gray'}}>All the latest and trending news which will you never get from any other app.</p>
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
