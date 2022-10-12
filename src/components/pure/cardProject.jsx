import React from 'react';
import '../../styles/cardProject.css'

const CardProject = ({project, description, img}) => {
  return (
    <div class="card">
      <div class="box">
        <div class="content">
          <h3>{project}</h3>
          <p>{description}</p>
          <a href="/">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
