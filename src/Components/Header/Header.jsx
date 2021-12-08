import React, { useContext, useState } from 'react'
import { Turn as Hamburger } from 'hamburger-react'
import "./header.css"
import logo from "../../imgs/avatar.png"
import { contentContext } from '../../context/contentContext'

function Header() {
    const [isOpen, setOpen] = useState(false)
    const {setContent} = useContext(contentContext)
    const handleContentChange = (event, route) => {
        event.preventDefault()
        setContent(route)
        setOpen(false)
    }
    return (
        
        <div className="header">
            <nav>
                <a href="/"> 
                    <img src={logo} alt="logo" className="header__logo" />
                </a>
                <div className="header__hamburger link">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </nav>


            {
                isOpen && (
                    <div className={`navbar__wrapper`}>
                        <div className="navbar__container">
                            <ul className="navbar__list">
                                <li className="navbar__item" onClick={(e) => handleContentChange(e, 'posts')}>
                                    <a href="#" className="navbar__link">
                                        Home
                                    </a>
                                </li>
                                <li className="navbar__item" onClick={(e) => handleContentChange(e,'form')}>
                                <a href="#" className="navbar__link">
                                        Add Post
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Header
