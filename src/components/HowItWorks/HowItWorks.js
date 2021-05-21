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
                        <h3>Set Goal</h3>
                        <p style={{fontWeight:'bold', color:'gray'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div className="item">
                    <div className="itemStyle2">
                        <img src={newspaper} className ="itemImg" alt="newspaper"/>
                    </div>
                    <div className="itemCont">
                        <h3>Get Trcked</h3>
                        <p style={{fontWeight:'bold', color:'gray'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div className="item">
                    <div className="itemStyle3">
                        <img src={trophy} className ="itemImg" alt="trophy" />
                    </div>
                    <div className="itemCont">
                        <h3>See Results</h3>
                        <p style={{fontWeight:'bold', color:'gray'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
