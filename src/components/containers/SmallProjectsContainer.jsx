import React from 'react';
import CardPractice from '../pure/CardPractice';
import '../../styles/css/smallProjectsContainer.css'

const SmallProjectsContainer = () => {
  return (
    <div className='practice-projects-container'>
      <h2>Prácticas</h2>
      <CardPractice 
        project='Chuck Jokes'
        description={'Una pagina donde podras votar por los chistes malos sobre chuck norris'} 
        link={'https://chuck-danodev.netlify.app/'}  
      />
      
      <CardPractice 
        project={'To do list'}
        description={'Usa esta herramienta de lista de tareas para mejorar tu productividad'}
        link={'https://todo-app-site-dan-dev.netlify.app/'}
      />
      
      <CardPractice 
        project={'Calculadora'}
        description={'Una calculadora, creada con react y React Hooks'}
        link={'https://calculadora-dan-dev.netlify.app/'}
      />

      <CardPractice 
        project={'Crea un meme'}
        description={'Una plantilla para hacer memes'}
        link={'https://creador-memes-site.netlify.app/'}
      />
    </div>
  );
}

export default SmallProjectsContainer;
