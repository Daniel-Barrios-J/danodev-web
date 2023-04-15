import React from 'react';
import '../../styles/css/descriptionMe.css'

const DescriptionMe = () => {
  return (
    <section className='about-me'>
        <p className='about-me-text'>
          Hola! Soy <span className='title-name'>Daniel</span>, muy curioso y apasionado.
          <br /><br />
          Me gusta entender bien cada cosa nueva que aprendo y encontrarle usos <span className='title-name' style={{fontSize: '24px' }}>creativos y funcionales.</span>
          <br /><br />
          Estudié en el <span style={{color: 'crimson'}}>Instituto Politecnico Nacional</span>. Pienso que mi paso por la institucion fue clave para enamorarme de las tecnologias y la inmensa forma que tenemos de <span className='title-name' style={{fontSize:'24px'}}>resolver problemas</span> cotidianos con ellas.
          <br /><br />
          Me considero muy <span className='title-name' style={{fontSize:'24px'}}>empatico</span>. Dispuesto a ayudar y buscar soluciones, donde una clara <span className='title-name' style={{fontSize:'24px'}}>comunicación</span> siempre es clave.
        </p>
    </section>
  );
}

export default DescriptionMe;
