import React from 'react';
import '../../styles/cardProject.css'

const CardProject = ({project, description, link}) => {
  return (
    <div class="card">
      <div class="box">
        <div class="content">
          <h3>{project}</h3>
          <p>{description}</p>
          <a href={link}>Read More</a>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
