import React, { useEffect, useState }from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/css/header.css'

const Header = () => {

  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [width, setWidth] = useState(document.documentElement.clientWidth);

  useEffect(() => {
    setWidth(document.documentElement.clientWidth)
  }, []);

  return (
    <header className='header'>
        <h3 className='inicio-title' onClick={()=>navigate('/')}>DanielWeb</h3>
        <nav className='nav-container'>
          <img alt='menu' onClick={()=>setMenu(!menu)} src="https://img.icons8.com/nolan/64/menu.png"/>
          <ul className={width > 640 ? 'list-nav' : `menu-mobile ${menu && 'show'}`}>
            <li className='list-item' onClick={()=>navigate('/')}>Home</li>
            <li className='list-item' onClick={()=>navigate('/about')}>About me</li>
            <li className='list-item' onClick={()=>navigate('/portfolio')}>Portfolio</li>
            <li className='list-item' onClick={()=>navigate('/contact')}>Contact</li>            
          </ul>
        </nav>
      </header>
  );
}

export default Header;
