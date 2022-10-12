import React from 'react';
import '../../styles/descriptionMe.css'

const DescriptionMe = () => {
  return (
    <section className='about-me'>
      <div className='about-me-container'>
        <p className='about-me-text'>
          Un gusto saludarte, Soy <span className='title-name'>Daniel Iván</span> y soy alguien con mucha curiosidad.
          <br /><br />
          Me gusta entender bien cada cosa nueva que aprendo y encontrarle usos <span className='title-name' style={{fontSize: '24px' }}>creativos y funcionales.</span>
          <br /><br />
          Estudié en el <span style={{color: 'crimson'}}>Instituto Politecnico Nacional</span>, aunque en un area algo distinta (ingenieria en Robotica industrial), pienso que mi paso por la institucion fue clave para enamorarme de las tecnologias y la inmensa forma que tenemos de <span className='title-name' style={{fontSize:'24px'}}>resolver problemas</span> cotidianos con ellas.
          <br /><br />
          Me considero muy <span className='title-name' style={{fontSize:'24px'}}>empatico</span>. Dispuesto a ayudar y buscar soluciones, donde una clara <span className='title-name' style={{fontSize:'24px'}}>comunicación</span> siempre es clave.
        </p>
      </div>
    </section>
  );
}

export default DescriptionMe;
