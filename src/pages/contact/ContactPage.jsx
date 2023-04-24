import React from 'react';
import CardContact from '../../components/pure/cardContact';
import Header from '../../components/pure/Header';
import '../../styles/css/contactPage.css'
import { imgUrls } from '../../utils/imagesURLS';

const ContactPage = () => {
  return (
    <div className='card-page'>
      <Header />
      <div className='card-contact-container'>
        <CardContact description={'Linked In'} link={'https://www.linkedin.com/in/daniel-barrios-jim%C3%A9nez-9823041b7/'} img={imgUrls.LINKED_IN} />
        <CardContact description={'Whatsapp'} link={'https://wa.me/qr/25WQMWRFOEVZG1'} img={imgUrls.WHATSAPP} />
        <CardContact description={'GitHub'} link={'https://github.com/Daniel-Barrios-J'} img={imgUrls.GITHUB} />
      </div>
      <div className='contact-direct'>
        <a href='mailto:daniel.bj.rd@gmail.com'>daniel.bj.rd@gmail.com</a>
      </div>
    </div>
  );
}

export default ContactPage;
