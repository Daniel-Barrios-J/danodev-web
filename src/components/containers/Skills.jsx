import React from 'react';
import '../../styles/css/skills.css'
import CardSkills from '../pure/CardSkills';
import { skills } from '../../utils/skills';

const Skills = () => {
  return (
    <section className='skills'>
      <h2 className='title-skills'>Habilidades</h2>
      <div className='skills-container'>
        {
          skills.map(skill => <CardSkills key={skill.tech} skill={skill.tech} urlImage={skill.img} />)
        }
      </div>
    </section>
  );
}

export default Skills;
