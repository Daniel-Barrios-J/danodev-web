import React from 'react';
import '../../styles/css/cardProject.css'

const CardProject = ({project, description, link}) => {
  return (
    <div className="card">
      <div className="box">
        <div className="content">
          <h3>{project}</h3>
          <p>{description}</p>
          <a target={'_blank'} href={link} rel="noreferrer" >Ir a la app</a>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
