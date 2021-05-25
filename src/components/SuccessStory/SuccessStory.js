import React from 'react'
import './SuccessStory.css'

function SuccessStory() {
    return (
        <div className="successStory"> 
            <div className="leftStorySection">
                {<lottie-player src="https://assets5.lottiefiles.com/packages/lf20_fxvz0c.json"  background="transparent"  speed="1"  style={{width: '100%', height: '70vh'}} loop autoplay></lottie-player>}
            </div>
            <div className="rightStorySection">
                <h3 className="successStoryHead1">Our Story</h3>
                <h2 className="successStoryHead2">Making news more news </h2>
                <p className="successStoryPar">We were being fed up of media serving entertainment in name of news .we want to make news more news more consumable more simplified and more time saving.</p>

                     
                <button className="headBut2">Coming Soon</button>
            </div>
        </div>
    )
}

export default SuccessStory
