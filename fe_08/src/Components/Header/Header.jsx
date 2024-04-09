import React, {useState} from 'react'
import header_icons from '../../Assets/icons/header_icons.js'
import avatar from '../../Assets/img/avatar.jpg'
import { Logo } from '../Logo/Logo.jsx';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div id='header' className="header">
      <div className="container">
        <div className="top-bar">
          {/* Logo */}
          <Logo/>

          {/* Navbar */}
          <div className="navbar">
            <ul className='navbar__list'>
              <li><Link to ='/' className='navbar__link'>Departments<img src={header_icons.arrow_down} alt="" className='icon navbar__arrow' /></Link></li>
              <li><Link to ='/' className='navbar__link'>Grocery<img src={header_icons.arrow_down} alt="" className='icon navbar__arrow' /></Link></li>
              <li><Link to ='/' className='navbar__link'>Beauty<img src={header_icons.arrow_down} alt="" className='icon navbar__arrow' /></Link></li>
            </ul>
          </div>

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
