import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/css/presentation.css'
import Button from '../pure/Button';

const Presentation = () => {
  return (
    <section className='presentation'>
      <div className='presentation-container'>
        <p className='title-pre'>Hola, Soy</p>
        <h1 className='title-name'>Daniel</h1>
        <h2 className='title-dev'>Desarrollador Web</h2>
        <div className='buttons-container'>
          <NavLink to={'/contact'}>
            <Button description={'Contacto'} type={'primary'}/>
          </NavLink>
          <NavLink to={'/about'}>
            <Button description={'Sobre mi'} type={'secondary'}/>  
          </NavLink>
          <NavLink to={'/portfolio'}>
            <Button description={'Portafolio'} type={'third'}/>  
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
