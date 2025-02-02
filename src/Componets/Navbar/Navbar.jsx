import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/amara-logo.png'
import '../../output.css';

const Navbar = () => {
   
    return (
        <nav className='p-4 fixed w-full z-50 backdrop-blur-lg bg-white/30 shadow-md'>
            <div className="container mx-auto flex justify-between items-center">
                <img id = 'logo' src={logo} width="120" alt=""/>
                <ul className="nav-links">
                    <li> <a href = "#about-me"> About Me </a> </li>
                    <li> <a href = "#projects"> Projects </a> </li>
                    <li> <a href = "#documents"> Documents </a> </li>  
                    <li> <a href = "#content"> Connect </a> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar