import React from 'react';
import '../../styles/css/cardContact.css'
const CardContact = ({img, description, link}) => {
  return (
    <a className='card-contact' target={'_blank'} href={link} rel="noreferrer">
      <div className='card-contact-logo'>
        <img src={img} alt={description} />
      </div>
      <div className='card-container-description'>
        <h2>{description}</h2>
      </div>
    </a>
  );
}

export default CardContact;
