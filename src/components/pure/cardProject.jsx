import React from 'react';
import '../../styles/css/cardProject.css'

const CardProject = ({project, description, link}) => {
  return (
    <div class="card">
      <div class="box">
        <div class="content">
          <h3>{project}</h3>
          <p>{description}</p>
          <a target={'_blank'} href={link} rel="noreferrer" >Ir a la app</a>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
