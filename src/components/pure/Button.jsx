import React from 'react';
import '../../styles/css/buttons.css'

const Button = ({description, type = 'primary'}) => {
  return (
    <button className={`btn-${type}`}>
      {description}
    </button>
  );
}

export default Button;
