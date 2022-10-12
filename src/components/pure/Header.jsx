import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/header.css'

const Header = () => {
  return (
    <header className='header'>
        <NavLink className='inicio-container' to={'/'}>
          <h3 className='inicio-title'>DanoDev</h3>
        </NavLink>
        <nav className='nav-container'>
          <ul className='list-nav'>
            <NavLink className='list-item' to={'/'}>Home</NavLink>
            <NavLink className='list-item' to={'/about'}>About</NavLink>
            <NavLink className='list-item' to={'/portfolio'}>Portfolio</NavLink>
            <NavLink className='list-item' to={'/contact'}>Contact</NavLink>            
          </ul>
        </nav>
      </header>
  );
}

export default Header;
