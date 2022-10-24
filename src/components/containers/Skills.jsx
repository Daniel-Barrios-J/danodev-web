import React from 'react';
import '../../styles/css/skills.css'
import CardSkills from '../pure/CardSkills';

const Skills = () => {
  return (
    <section className='skills'>
      <h2 className='title-skills'>Habilidades</h2>
      <div className='skills-container'>

        <CardSkills skill={'React'} description={'React una libreria ampliamente usada con un gran potencial de desarrollo y escalabilidad.'} urlImage='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Flogos-3%2F600%2FReact.js_logo-1024.png&f=1&nofb=1&ipt=05b5ab24f647fd4d47e3d58a82da2b6995152c37e26e491cf9c250d0b134ac59&ipo=images'/>
        
        <CardSkills skill={'Redux'} description={'Redux como herramienta para gestionar el estado de la aplicación'} urlImage={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F688%2F1*lBW3KS3I68NnxoB7_maVBA.png&f=1&nofb=1&ipt=5e8ded6f80cddefbdf58eba11aac10ded8236e0075da5655c8c8161a81508dbd&ipo=images'}/>

        <CardSkills skill={'Node'} description={"Node.js Para el desarrollo de entorno Back-End y creación de API's"} urlImage={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjuststickers.in%2Fwp-content%2Fuploads%2F2019%2F07%2Fnodejs.png&f=1&nofb=1&ipt=f97085f2d83bc9cfbc6ab57022d127b7a62454871a7e253638bbdf72f033d8f5&ipo=images'}/>

        <CardSkills skill={'Express'} description={"Express como framework para la construccion de Back-End y API's mas eficaz"} urlImage={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F5000%2F1*M1XoId5pZaVJiIDAMDTDiw.png&f=1&nofb=1&ipt=f5b019b3e7e6d670e530bcb4f900d685e2b1c9eb2d008a5681d0802f810e68e6&ipo=images'}/>

        <CardSkills skill={'Sass'} description={'Framework CSS para escribir estilos como mayor dinamismo y escalabilidad'} urlImage={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogonoid.com%2Fimages%2Fsass-logo.png&f=1&nofb=1&ipt=26facd851b43edce1ad268cf652e06e2510af66a13c422d52315ea6f303e0ebc&ipo=images'}/>

        <CardSkills skill={'Git'} description={'Para el manejo de ropositorios y control de versiones en conjunto de GitHub'} urlImage={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Fthumbs%2F2x%2Fgit-logo.png&f=1&nofb=1&ipt=c5911c4998fd3a3268aa6990fd59b9ce39a36b5239e821a7f2c1b5eaccd804d7&ipo=images'}/>


      </div>
    </section>
  );
}

export default Skills;
