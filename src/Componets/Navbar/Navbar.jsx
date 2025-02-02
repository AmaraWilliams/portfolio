import React from 'react'
import './Navbar.css'
import logo from '../../assets/amara-logo.png'
const Navbar = () => {
    return (
        <div className="navbar">
            <img id = 'logo' src={logo} width="260" alt=""/>
            <ul className="nav-links">
                <li> <a href = "#about-me"> About Me </a> </li>
                <li> <a href = "#projects"> Projects </a> </li>
                <li> <a href = "#documents"> Documents </a> </li>  
                <li> <a href = "#content"> Content </a> </li>
            </ul>
        </div>
    )
}

export default Navbar