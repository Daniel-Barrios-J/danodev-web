import React from 'react';
import CardContact from '../../components/pure/cardContact';
import Header from '../../components/pure/Header';
import '../../styles/css/contactPage.css'


const ContactPage = () => {
  return (
    <div className='card-page'>
      <Header />
      <div className='card-contact-container'>
        <CardContact description={'GitHub'} link={'https://github.com/Daniel-Barrios-J'} img={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Ficonsimple-logotypes%2F512%2Fgithub-512.png&f=1&nofb=1&ipt=7b640d8a11ffba19d22ab4d0372d80ff6ada8c17fa90240c45e312b222de0e1c&ipo=images'} />
        <CardContact description={'Linked In'} link={'https://www.linkedin.com/in/daniel-barrios-jim%C3%A9nez-9823041b7/'} img={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2FlinkedIn%2FlinkedIn_PNG32.png&f=1&nofb=1&ipt=c7fbdf46253066b0897d540f08789f2a43da49ae0dcd95db0bbc48a236dab35f&ipo=images'} />
        <CardContact description={'Whatsapp'} link={'https://wa.me/qr/25WQMWRFOEVZG1'} img={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fwhatsapp-logo-image-8.png&f=1&nofb=1&ipt=880aec13797d46a406779b03b4554b8653b354ad01695bbc06464bf6ddf8bbf7&ipo=images'} />
      </div>
      <div className='contact-direct'>
        <a href='mailto:daniel.bj.rd@gmail.com'>daniel.bj.rd@gmail.com</a>
      </div>
    </div>
  );
}

export default ContactPage;
