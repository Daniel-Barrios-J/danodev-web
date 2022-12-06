import React from 'react';
import CardProject from '../pure/cardProject';
import '../../styles/css/projectsContainer.css'

const ProjectsContainer = () => {
  return (
    <div className='projects-container'>
      <CardProject
          project={'Amaranto'}
          description={'Una tienda en linea de flores, creada con react, redux y mas'}
          link={'https://amaranto-site.netlify.app/'}
        />
      <CardProject
          project={'Amaranto'}
          description={'Una tienda en linea de flores, creada con react, redux y mas'}
          link={'https://amaranto-site.netlify.app/'}
        />
    </div>
  );
}

export default ProjectsContainer;
