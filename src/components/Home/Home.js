import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="leftContent">
                <h1 className="headText1">Trending News</h1> 
                <h1 className="headText2"> From All Over World</h1>
                <p className="headPar">stay tune with trending news from all over the world</p>
                <button className="headBut1">Download app</button>
                <button className="headBut3">Watch our video</button>
            </div>
            <div className="rightContent">
                <div className="homeIllusrtration">
                    {/* {<lottie-player src="https://assets5.lottiefiles.com/packages/lf20_2LdLki.json"  background="transparent"  speed="1"  style={{width: '450px', height: '450px'}}  loop autoplay></lottie-player>} */}
                    {<lottie-player src="https://assets1.lottiefiles.com/packages/lf20_oxoSX7.json"  background="transparent"  speed="1"  style={{width: '100%', height: '60vh'}}  loop autoplay></lottie-player>}
            </div> 
            </div>
        </div>
    )
}

export default Home
