import React from 'react';
import { Link } from 'react-router-dom';
import header_icons from '../../Assets/icons/header_icons.js';

export const Logo = () => {
  return (
    <>
      <Link to='/' className='logo'>
        <img src={header_icons.logo} alt="grocerymart" className='logo__img' />
        <h1 className="logo__title">grocerymart</h1>
      </Link>
    </>
  );
};
