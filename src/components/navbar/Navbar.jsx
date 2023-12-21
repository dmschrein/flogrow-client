import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/flogrow-logo.png';

import './navbar.css'

const Menu = () => (
<>
    <p><a href="#home">Home</a></p>
    <p><a href="#wflogrow">What is FloGrow?</a></p>
    <p><a href="#possibility">AI Marketing</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
</>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flogrow__navbar">
      <div className="flogrow__navbar-links">
        <div className="flogrow__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="flogrow__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="flogrow__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="flogrow__navbar-menu">
    {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
            <div className="flogrow__navbar-menu_container scale-up-center">
                <div className="flogrow__navbar-menu_container-links">
                    <Menu />
                    <div className="flogrow__navbar-menu_container-links-sign">
                        <p>Sign in</p>
                        <button type="button">Sign up</button>
                    </div>
                </div>
                </div>
        )}
      </div>
    </div>
  )
}

export default Navbar