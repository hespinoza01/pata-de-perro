import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

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
import Footer from "./Footer";
import UseCookieAlert from "./UseCookieAlert";

let style = {
  padding: 0,
  margin: 0,
  width: '100%',
  height: '100%'
};

class Landing extends Component{
  constructor(props){
    super(props);

    this.state = {
      images: [Granada, Gue, lp, NicaraguaBosawas, ometepe, volcan, volcanMasaya]
    };

    this.onGoToMain = this.onGoToMain.bind(this);
  }

  onGoToMain(e){
    e.preventDefault();
    this.props.history.push('/inicio');
  }

  render() {
    return (
      <section>
        <article style={style}>
          <Carousel images={this.state.images}/>

          <img src={logo} className='landing-logo' alt='logo'/>

          <div className='landing-form'>
            <h1 className='landing-h1'>¡Descubre Nicaragua!</h1>
            <SearchBox onSubmit={this.onGoToMain} placeholder={'¿Qué quieres buscar?'}/>
          </div>
        </article>

        <UseCookieAlert/>
        <Footer/>
      </section>
    );
  }
}

export default withRouter(Landing);
