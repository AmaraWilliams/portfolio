import React from 'react'
import './Navbar.css'
import logo from '../../assets/amara-logo.png'
const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} width="260" alt=""/>
            <ul className="nav-links">
                <li> About Me </li>
                <li>Projects</li>
                <li>Documents</li>    
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar