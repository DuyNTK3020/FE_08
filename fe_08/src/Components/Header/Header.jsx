import React, { useState } from 'react';
import header_icons from './../../Assets/icons/header_icons.js';
import arrow_left_icon from './../../Assets/icons/arrow_left.svg';
import avatar from './../../Assets/img/avatar.jpg';
import { Logo } from './../Logo/Logo.jsx';
import { Dropdown } from './../Dropdown/Dropdown.jsx';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div id='header' className="header">
      <div className="container">
        <div className="top-bar">
          {/* More */}
          <button className="top-bar__more" onClick={toggleNavbar}>
            <img src={header_icons.more} alt="" className='top-bar__more-icon icon'/>
          </button>

          {/* Logo */}
          <Logo/>

          {/* Navbar */}
          <div className={`navbar ${isNavbarOpen ? 'open' : ''}`}>
            <button className="navbar__close-btn" onClick={toggleNavbar}>
              <img src={arrow_left_icon} alt="" />
            </button>
            <ul className='navbar__list js-dropdown-list'>
              <li className='navbar__item'>
                <Link to ='/' className='navbar__link'>
                  Departments
                  <img src={header_icons.arrow_down} alt="" className='icon navbar__arrow' />
                </Link>
                <Dropdown/>
              </li>
              <li className='navbar__item'>
                <Link to ='/' className='navbar__link'>
                  Grocery
                  <img src={header_icons.arrow_down} alt="" className='icon navbar__arrow' />
                </Link>
                <Dropdown/>
              </li>
              <li className='navbar__item'>
                <Link to ='/' className='navbar__link'>
                  Beauty
                  <img src={header_icons.arrow_down} alt="" className='icon navbar__arrow' />
                </Link>
                <Dropdown/>
              </li>
            </ul>
          </div>
          <div className={`navbar__overlay ${isNavbarOpen ? 'close' : ''}`} onClick={toggleNavbar}></div>

          {/* Actions */}
          <div className="top-act">
            <div className="top-act__group">
              <button className="top-act__btn">
                <img src={header_icons.search} alt="" className="icon top-act__icon" />
              </button>
            </div>

            <div className="top-act__group">
              <button className="top-act__btn">
                <img src={header_icons.heart} alt="" className="icon top-act__icon" />
                <span className='top-act__title'>03</span>
              </button>

              <div className="top-act__separate"></div>

              <button className="top-act__btn">
                <img src={header_icons.buy} alt="" className="icon top-act__icon" />
                <span className='top-act__title'>$65.42</span>
              </button>
            </div>

            <div className="top-act__user">
              <img src={avatar} alt="" className="top-act__avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
