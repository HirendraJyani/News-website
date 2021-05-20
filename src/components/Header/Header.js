import React from 'react'
import './Header.css'

const Header = () => {


    return (
        <div className="header">
            <nav>
                <div className="logo">News App</div>
                <div className="links">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
