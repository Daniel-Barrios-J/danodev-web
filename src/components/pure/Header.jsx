import React, { useState, useEffect }from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/header.css'

const Header = () => {

  const obtenerAncho = ()=> {
    let widthSize = document.documentElement.clientWidth;
    setWidth(widthSize);
    console.log(widthSize)
  }

  const [width, setWidth] = useState(0);

  useEffect(() => {
    obtenerAncho()
  }, []);
  

  console.log(width)

  return (
    <header className='header'>
        <NavLink className='inicio-container' to={'/'}>
          <h3 className='inicio-title'>DanoDev</h3>
        </NavLink>
        <nav className='nav-container'>
          <img alt='menu' src="https://img.icons8.com/nolan/64/menu.png"/>
          <ul className={width > 640 ? 'list-nav' : 'menu-mobile'}>
            <NavLink className='list-item' to={'/'}>Home</NavLink>
            <NavLink className='list-item' to={'/about'}>About</NavLink>
            <NavLink className='list-item' to={'/contact'}>Contact</NavLink>            
            <NavLink className='list-item' to={'/portfolio'}>Portfolio</NavLink>
          </ul>
        </nav>
      </header>
  );
}

export default Header;
