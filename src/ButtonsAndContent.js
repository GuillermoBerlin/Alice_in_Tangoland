import React, { useState } from 'react';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import './ButtonsAndContent.css';

const ButtonsAndContent = () => {
  const [componenteActivo, setComponenteActivo] = useState(About);

  const renderizarComponente = (componente) => {
    setComponenteActivo(componente);
  };

  return (
    <div className='buttonsAndContent'>
      <div className='containerButtons'>
        <button onClick={() => renderizarComponente(About)}>About</button>
        <button onClick={() => renderizarComponente(Gallery)}>Gallery</button>
        <button onClick={() => renderizarComponente(Contact)}>Contact</button>
      </div>

      <div>
        {componenteActivo} 
      </div>  
    </div>

  );
};

export default ButtonsAndContent;
