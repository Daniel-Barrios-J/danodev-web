import React from 'react';
import '../../styles/cardSkill.css'

const CardSkills = ({skill, description, urlImage}) => {
  return (  
    <div class="card-skill">
      <div class="img-container">
        <img class="inner-skew" alt='skill' src={urlImage}/>
      </div>
      <div class="text-container">
        <h3>{skill}</h3>
        <div className='text'>
          {description}
        </div>
      </div>
    </div>
  );
}

export default CardSkills;
