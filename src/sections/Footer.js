import React from 'react';
import AppName from '../img/appname.svg';
import './Footer.css';

import SocialIcons from "../components/SocialIcons";

function Copyright(){
  return (
    <div className='copyright'>
      <img src={AppName} alt="Pata de perro"/>
      <p>Copyright 2019 pata de perro | Todos los derechos reservados.</p>
    </div>
  );
}

function Newsletter(){
  function onNewsletterForm(e){
    e.preventDefault();
  }

  return (
    <form action="" onSubmit={onNewsletterForm} className='newsletter'>
      <p>¿Quieres ser el primero en enterarte sobre nuestras novedades? ¡Suscríbete a nuestro boletín de noticias!</p>
      <fieldset>
        <input type="text" placeholder="Dirrecion de correo"/>
        <button>Suscribirse</button>
      </fieldset>
    </form>
  );
}

function Footer(){
  return (
    <footer className='footer'>
      <Newsletter></Newsletter>
      <SocialIcons></SocialIcons>
      <Copyright></Copyright>
    </footer>
  );
}

export default Footer;
