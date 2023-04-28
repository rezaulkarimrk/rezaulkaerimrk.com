import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {GoThreeBars} from 'react-icons/go'
import {IoMdCloseCircleOutline} from 'react-icons/io'

import './Header.css'
const Header = () => {
    const [toggle, setToggle] = useState(false);
    const Menu = () => (<>
        <nav className='navbar' >
            <a href="#home"  >Home</a>
            <a href="#about" >About</a>
            <a href="#services" >Services</a>
            <a href="#portfolio" >Portfolio</a>
            <a href="#contact" >Contact</a>
        </nav>
    </>)

    const handleClick = () => {
        toggle ? setToggle(false) : setToggle(true);
    }
    
    return (
        <header className='header' >

        <NavLink to="/" className='logo' >Portfolio</NavLink>

        <GoThreeBars className='app__menu-icons' onClick={handleClick} />
        {toggle && <div className='app__header-menu' >
                        <div className='app__navbar-item' >
                            <Menu />
                            <IoMdCloseCircleOutline onClick={handleClick} />
                        </div>
                        
                    </div>
        }
        <div className="big-screen">
            <Menu/>
        </div>
        
        </header>
        
    )
}

export default Header;