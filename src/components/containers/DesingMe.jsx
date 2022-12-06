import React from 'react';
import '../../styles/css/desingMe.css'
import ProjectsContainer from './ProjectsContainer';
import SmallProjectsContainer from './SmallProjectsContainer';

const DesingMe = () => {
  return (
    <section className='desing-me'>
      <h2 className='title-projects'>Proyectos</h2>
      <div className='desing-me-container'>

        <ProjectsContainer/>
        <SmallProjectsContainer />
        
      </div>
    </section>
  );
}

export default DesingMe;
