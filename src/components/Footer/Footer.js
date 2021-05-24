import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footerAbout">
                <h2>Newsefy</h2>
                <p>Get tracked all the time and ensure a healthier life</p>
            </div>
            <div className="footerSupport">
                <h3>Support</h3>
                <p>Product Help</p>
                <p>Wear and Care</p>
                <p>Community</p>
            </div>
            <div className="footerLegal">
                <h3>Legal</h3>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Cookies</p>
            </div>
            <div className="footerSol">
                <h3>Health Solution</h3>
                <p>Employers</p>
                <p>Health Plan</p>
                <p>Workforce Health</p>
            </div>
        </div>
    )
}

export default Footer
