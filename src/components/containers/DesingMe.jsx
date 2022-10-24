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
          link={'https://amaranto-site.netlify.app/'}
        />
        
        <CardProject 
          project='Chuck Jokes'
          description={'Una pagina donde podras votar por los chistes malos sobre chuck norris'} 
          link={'https://chuck-danodev.netlify.app/'}  
        />
        
        <CardProject 
          project={'To do list'}
          description={'Usa esta herramienta de lista de tareas para mejorar tu productividad'}
          link={'https://todo-app-site-dan-dev.netlify.app/'}
        />
        
        <CardProject 
          project={'Calculadora'}
          description={'Una calculadora, creada con react y React Hooks'}
          link={'https://calculadora-dan-dev.netlify.app/'}
        />

        <CardProject 
          project={'Crea un meme'}
          description={'Una plantilla para hacer memes'}
          link={'https://creador-memes-site.netlify.app/'}
        />
      </div>
    </section>
  );
}

export default DesingMe;
