import React from 'react';
import './navbar';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='log' />
        <div className="desktopMenu">

        </div>
        <button className="desktopMenuBtn">
           <img src="" alt="" className="desktopMenuImg" />Contact Me </button>

    </nav>
  )
}

export default Navbar
