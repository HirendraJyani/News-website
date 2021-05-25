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
                <h2 className="successStoryHead2">Be our Success Story </h2>
                <p className="successStoryPar">Thousands of people are started to like Newsefy, if you are one of them, then tell us what is your story about Newsefy that makes you think that Nesefy is the best.</p>

                     
                <button className="headBut2">Coming Soon</button>
            </div>
        </div>
    )
}

export default SuccessStory
