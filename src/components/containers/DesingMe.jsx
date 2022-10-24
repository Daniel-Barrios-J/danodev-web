import React from 'react';
import CardProject from '../pure/cardProject';
import '../../styles/css/desingMe.css'

const DesingMe = () => {
  return (
    <section className='desing-me'>
      <h2 className='title-projects'>Proyectos</h2>
      <div className='desing-me-container'>

        <CardProject
          project={'Amaranto'}
          description={'Una tienda en linea de flores, creada con react, redux y mas'}
          // link={'#'}
        />
        
        <CardProject 
          project='Chuck Jokes'
          description={'Una pagina donde podras votar por los chistes malos sobre chuck norris'} 
          link={'https://chuck-danodev.netlify.app/'}  
        />
        
        <CardProject 
          project={'To do list'}
          description={'Usa esta herramienta de lista de tareas para mejorar tu productividad'}
        />
        
        <CardProject 
          project={'Calculadora'}
          description={'Una calculadora sencilla, creada con react y Hooks'}
        />

        <CardProject 
          project={'Crea un meme'}
          description={'Una plantilla para hacer memes'}
        />
      </div>
    </section>
  );
}

export default DesingMe;
