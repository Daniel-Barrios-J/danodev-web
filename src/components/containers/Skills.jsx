import React from 'react';
import '../../styles/css/skills.css'
import CardSkills from '../pure/CardSkills';

const Skills = () => {
  return (
    <section className='skills'>
      <h2 className='title-skills'>Habilidades</h2>
      <div className='skills-container'>

        <CardSkills skill={'React'} description={'Para le creacion de interfaces en aplicaciones web'} urlImage='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'/>
        
        <CardSkills skill={'Redux'} description={'Para gestionar el estado de la aplicación'} urlImage={'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png'}/>

        <CardSkills skill={'Node'} description={"Desarrollo de entorno Back-End y creación de API's"} urlImage={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png'}/>

        <CardSkills skill={'Express'} description={"Framework de node para construccion de Back-End y API's mas eficaz"} urlImage={'https://expressjs.com/images/express-facebook-share.png'}/>

        <CardSkills skill={'Sass'} description={'Para estilos con mayor dinamismo y escalabilidad'} urlImage={'https://1000marcas.net/wp-content/uploads/2021/06/Sass-Logo-1-1280x720.png'}/>

        <CardSkills skill={'Git'} description={'Control de versiones en conjunto de GitHub'} urlImage={'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'}/>

        <CardSkills skill={'LIT'} description={'Libreria ligera para la creacion de interfaces con web components'} urlImage={'https://avatars.githubusercontent.com/u/18489846?v=4'}/>

        <CardSkills skill={'MongoDB'} description={'Bases de datos NO-SQL, con mongoose'} urlImage={'https://gocode.colorado.gov/wp-content/uploads/2020/11/MongoDB-logo.gif'}/>

        <CardSkills skill={'Firebase'} description={'Como microservicios integrados, para autenticacion y base de datos'} urlImage={'https://miro.medium.com/v2/resize:fit:480/1*Cnv3NyPBLkabjYUBJuZnBw.png'}/>

        <CardSkills skill={'Javascript'} description={'Como microservicios integrados, para autenticacion y base de datos'} urlImage={'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'}/>

        <CardSkills skill={'HTML'} description={'Como microservicios integrados, para autenticacion y base de datos'} urlImage={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png'}/>

      </div>
    </section>
  );
}

export default Skills;
