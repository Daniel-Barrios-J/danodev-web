import React from 'react';
import CardProject from '../pure/cardProject';
import '../../styles/desingMe.css'

const DesingMe = () => {
  return (
    <section className='desing-me'>
      <h2 className='title-projects'>Proyectos</h2>
      <div className='desing-me-container'>

        <CardProject project={'Amaranto'} description={'Una tienda en linea de flores, creada con react, redux y mas'}/>
        <CardProject project='Chuck Jokes' description={'Una pagina donde podras votar por los chistes malos sobre chuck norris'}/>
        <CardProject project='Chuck Jokes' description={'Una pagina donde podras votar por los chistes malos sobre chuck norris'}/>
        <CardProject project={'Amaranto'} description={'Una tienda en linea de flores, creada con react, redux y mas'}/>
        
      </div>
    </section>
  );
}

export default DesingMe;
