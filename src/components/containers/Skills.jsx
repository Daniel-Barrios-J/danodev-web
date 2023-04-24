import React from 'react';
import '../../styles/css/skills.css'
import CardSkills from '../pure/CardSkills';
import { imgUrls } from '../../utils/imagesURLS';

const Skills = () => {
  return (
    <section className='skills'>
      <h2 className='title-skills'>Habilidades</h2>
      <div className='skills-container'>

        <CardSkills skill={'React'} description={'Para le creacion de interfaces en aplicaciones web'} urlImage={imgUrls.REACT}/>
        
        <CardSkills skill={'Redux'} description={'Para gestionar el estado de la aplicación'} urlImage={imgUrls.REDUX}/>

        <CardSkills skill={'Node'} description={"Desarrollo de entorno Back-End y creación de API's"} urlImage={imgUrls.NODE}/>

        <CardSkills skill={'Express'} description={"Framework de node para construccion de Back-End y API's mas eficaz"} urlImage={imgUrls.EXPRESS}/>

        <CardSkills skill={'Sass'} description={'Para estilos con mayor dinamismo y escalabilidad'} urlImage={imgUrls.SASS}/>

        <CardSkills skill={'Git'} description={'Control de versiones en conjunto de GitHub'} urlImage={imgUrls.GIT}/>

        <CardSkills skill={'LIT'} description={'Libreria ligera para la creacion de interfaces con web components'} urlImage={imgUrls.LIT}/>

        <CardSkills skill={'MongoDB'} description={'Bases de datos NO-SQL, con mongoose'} urlImage={imgUrls.MONGODB}/>

        <CardSkills skill={'Firebase'} description={'Como microservicios integrados, para autenticacion y base de datos'} urlImage={imgUrls.FIREBASE}/>

        <CardSkills skill={'Javascript'} description={'Como microservicios integrados, para autenticacion y base de datos'} urlImage={imgUrls.JAVASCRIPT}/>

        <CardSkills skill={'HTML'} description={'Como microservicios integrados, para autenticacion y base de datos'} urlImage={imgUrls.HTML}/>

      </div>
    </section>
  );
}

export default Skills;
