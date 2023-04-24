import React from 'react';
import CardProject from '../pure/cardProject';
import '../../styles/css/projectsContainer.css'

const ProjectsContainer = () => {
  return (
    <div className='projects-container'>
      <CardProject
          project={'Chat-GPT'}
          description={'Un clon funcional, hecho con react y LIT element con la API de OpenAI'}
          link={'https://gpt-dan-clone.netlify.app/'}
        />
      <CardProject
          project={'Amaranto'}
          description={'Una tienda en linea de flores, creada con react, redux y firebase'}
          link={'https://amaranto-site.netlify.app/'}
        />
    </div>
  );
}

export default ProjectsContainer;
