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
          project={'Divine nails'}
          description={'Pagina de salon de belleza, creada con react, MUI y styled components'}
          link={'https://divine-nails-site.netlify.app/'}
        />
    </div>
  );
}

export default ProjectsContainer;
