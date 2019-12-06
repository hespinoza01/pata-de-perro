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
      images: [Granada, Gue, lp, NicaraguaBosawas, ometepe, volcan, volcanMasaya],
      svalue: ''
    };

    this.onGoToMain = this.onGoToMain.bind(this);
    this.onChangeSvalue = this.onChangeSvalue.bind(this);
    this.onSeeMap = this.onSeeMap.bind(this);
  }

  onGoToMain(e) {
    e.preventDefault();
    this.props.history.push('/inicio');
    sessionStorage.setItem('SVALUE', this.state.svalue);
  }

  onSeeMap(){
    this.props.history.push('/inicio');
  }

  onChangeSvalue(e){
    this.setState({ svalue: e.target.value });
  }

  render() {
    return (
      <section>
        <article style={style}>
          <Carousel images={this.state.images}/>

          <img src={logo} className='landing-logo' alt='logo'/>

          <div className='landing-form'>
            <h1 className='landing-h1'>¡Encuentra lugares cerca de ti y descubre Nicaragua!</h1>
            <p className='landing-p'>Busca un museo, parque o restaurante. Tú decide. </p>

            <div className='landing-controls'>
              <SearchBox onSubmit={this.onGoToMain} onChange={this.onChangeSvalue} placeholder={'¿Qué quieres buscar?'}/>
              <button className='landing-controls__btn' onClick={this.onSeeMap}><i className='fa fa-map'> </i> Ver mapa</button>
            </div>
          </div>
        </article>

        <UseCookieAlert/>
        <Footer/>
      </section>
    );
  }
}

export default withRouter(Landing);
