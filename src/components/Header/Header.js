import React, {useState} from 'react'
import './Header.css'

const Header = () => {

    const [linkStyle, setLinkStyle] = useState(false);

    const linkStyleHandler = () =>{
        setLinkStyle({linkStyle:true})
    }

    return (
        <div className="header">
            <nav>
                <div className="logo">logo</div>
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
