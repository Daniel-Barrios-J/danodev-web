import { imgUrls } from "./imagesURLS"

const stylesAnchor = {
  textDecoration: 'underline',
  color: '#05BFDB'
}
export const projects = [
  {
    name: 'Chat-GPT funcional',
    link: 'https://gpt-dan-clone.netlify.app/',
    description:
    <>
      <p>Esta aplicacion funcionó como práctica para implementar conocimientos de POO, consumo de API's e incorporación de LIT o Lit element con React, la idea fue simular un ambiente de trabajo donde los equipos desarrollaron distintas partes de la app.</p>
      <ul>
        <li>
        Contruida con web-components gracias a LIT y como base, fue creada con React. (El proyecto inicial fue construido con un equipo trainee del que soy parte. Puede consultarse en el siguiente repositorio <a style={stylesAnchor} href="https://github.com/maldos23/class-lit-kairos-chatGPT">aquí</a> con toda la info del proyecto inicial)
        </li>
        <br />
        <li>
          Por mi parte, me encargue del area del historial, dandole funcionalidad, y posteriormente, segui avanzando el proyecto por mi cuenta, usando tecnologia de LIT, añadiendo responsividad y titulos dinamicos de los chats utilizando la propia API de OpenAI
        </li>
      </ul>
      <p>
        Consulta el repositorio donde trabajo en el proyecto actual <a style={stylesAnchor} href="https://github.com/Daniel-Barrios-J/Kairos-chatGPT">aquí</a>
      </p>
    </>,
    technologies: [
      {
        tech:'LIT',
        img: imgUrls.LIT
      },
      {
        tech:'React',
        img: imgUrls.REACT
      },
      {
        tech:'GIT',
        img: imgUrls.GIT
      },
      {
        tech:'GitHub',
        img: imgUrls.GITHUB
      },
    ]
  },
  {
    name: 'Amaranto Floreria',
    link: 'https://amaranto-site.netlify.app/',
    description:
    <>
      <p>
        Amaranto floreria es una tienda en linea de flores que pretende realizar cotizaciones y pedidos personalizados así como venta de flores por catalogo
      </p>
      <ul>
        <li>
          El Front-End de esta aplicacion está contruida principalmente con React, junto con Redux Toolkit para el manejo del estado.
        </li>
        <br />
        <li>
          En el Back-end utiliza microservicios de Firebase, con Firestore para base de  datos y Firebase Auth para autenticacion de usuarios.
        </li>
      </ul>
      <p>
        La tienda tiene diseños responsivo, adaptandose correctamente en mobile y desktop. Consulta el repositorio <a style={stylesAnchor} href="https://github.com/Daniel-Barrios-J/amaranto">aquí</a>
      </p>
    </>,
    technologies: [
      {
        tech:'React',
        img: imgUrls.REACT
      },
      {
        tech:'Redux',
        img: imgUrls.REDUX
      },
      {
        tech:'Firebase',
        img: imgUrls.FIREBASE
      },
      {
        tech:'Sass',
        img: imgUrls.SASS
      },
      {
        tech:'GIT',
        img: imgUrls.GIT
      },
      {
        tech:'GitHub',
        img: imgUrls.GITHUB
      },
    ]
  },
  {
    name: 'Divine Nails',
    link: 'https://divine-nails-site.netlify.app/',
    description:
    <>
      <p>
        Divine nails es una empresa de salon de belleza con sucursales en Mexico.
      </p>
      <ul>
        <li>
          El Front-End de esta aplicacion esta siendo desarrollada con MUI y styled components para los estilos.
        </li>
        <br />
        <li>
          En el Back-end y base de datos esta construido con Express y MongoDB, requerido para agregar promociones y servicios, segun sus temporadas.
        </li>
      </ul>
      <p>
        Acutalmente sigue en desarrollo para otorgarle una completa funcionalidad. El <a style={stylesAnchor} href="https://github.com/Daniel-Barrios-J/divine-nails">Front-end</a> y <a style={stylesAnchor} href="https://github.com/Daniel-Barrios-J/divine-nails-backend">Back-end</a> estan dividios en dos reposorios respectivamente.
      </p>
    </>,
    technologies: [
      {
        tech:'React',
        img: imgUrls.REACT
      },
      {
        tech:'Node',
        img: imgUrls.NODE
      },
      {
        tech:'Express',
        img: imgUrls.EXPRESS
      },
      {
        tech:'MongoDb',
        img: imgUrls.MONGODB
      },
      {
        tech:'Styled Components',
        img: imgUrls.STYLED_COMPONENTS
      },
      {
        tech:'MUI',
        img: imgUrls.MUI
      },
      
    ]
  },
]