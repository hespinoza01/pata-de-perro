import React from 'react';

import './Landing.css';
import logo from '../img/faviconwhite.png';
import Granada from '../img/landing/Granada.jpg';
import Gue from '../img/landing/gue.jpg';
import lp from '../img/landing/lp.jpg';
import NicaraguaBosawas from '../img/landing/Nicaragua-Bosawás-reserva.jpg';
import ometepe from '../img/landing/ometepe.jpg';
import volcan from '../img/landing/volcan.jpg';
import volcanMasaya from '../img/landing/volcan-masaya.jpg';

import SearchBox from "../components/SearchBox";
import Carousel from "../components/Carousel";

let style = {
  padding: 0,
  margin: 0,
  width: '100%',
  height: '100%'
};

function Landing({onHideLanding}){
  let images=[Granada, Gue, lp, NicaraguaBosawas, ometepe, volcan, volcanMasaya];

  return (
    <section style={style}>
      <Carousel images={images} />

      <img src={logo} className='landing-logo' alt='logo'/>

      <div className='landing-form'>
        <h1 className='landing-h1'>¡Descubre Nicaragua!</h1>
        <SearchBox onSubmit={onHideLanding} placeholder={'¿Qué quieres buscar?'}/>
      </div>
    </section>
  );
}

export default Landing;
