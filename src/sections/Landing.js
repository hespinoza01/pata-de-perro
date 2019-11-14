import React from 'react';
import './Landing.css';
import logo from '../img/logo.png';

import Granada from '../img/landing/Granada.jpg';


function Landing(props){
  return (
    <section>
      <img className="landing-img" src={Granada}/>
      <img src={logo} className='landing-logo'/>
     
      <form className='landing-form'>
        <h1 className='landing-h1'>Descubré Nicaragua</h1>
        <input type="search" name="busqueda" className='landing-txt' placeholder="¿Adónde?"/>
        <button className='landing-btn'>Buscar</button>
      </form>
    </section>
  );
}

export default Landing;
