import React from 'react';
import '../../styles/buttons.css'

const Button = ({description, type = 'primary'}) => {
  return (
    <button className={type === 'secondary' ? 'btn-secondary' : 'btn-primary' }>
      {description}
    </button>
  );
}

export default Button;
