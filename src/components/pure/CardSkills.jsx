import React from 'react';
import '../../styles/css/cardSkill.css'

const CardSkills = ({skill, description, urlImage}) => {
  return (  
    <div className="card-skill">
      <div className="img-container">
        <img className="inner-skew" alt='skill' src={urlImage}/>
      </div>
      <div className="text-container">
        <h3>{skill}</h3>
        <div className='text'>
          {/* {description} */}
        </div>
      </div>
    </div>
  );
}

export default CardSkills;
