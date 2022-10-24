import React from 'react';
import '../../styles/css/cardContact.css'
const CardContact = ({img, description, link}) => {
  return (
    <div className='card-contact'>
      <a target={'_blank'} href={link} rel="noreferrer">
        <div className='card-contact-logo'>
          <img src={img} alt={description} />
        </div>
      </a>
      <div className='card-container-description'>
        <h2>{description}</h2>
      </div>
      
    </div>
    
    
  );
}

export default CardContact;
