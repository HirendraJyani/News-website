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
                <p className="successStoryPar">It is a long established fact that a reader will be distracted by the readable content 
                    of a page when looking at its layout. The point of using Lorem Ipsum is that it has a 
                    more-or-less normal distribution of letters, as opposed to using 'Content here, content 
                    here', making it look like readable English. Many desktop publishing packages and web page 
                    editors now use Lorem Ipsum as their default model text.</p>

                     
                <button className="headBut2">Watch our video</button>
            </div>
        </div>
    )
}

export default SuccessStory
