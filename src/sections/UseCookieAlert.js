import React, {Component} from 'react';
import Cookie from "../utils/Cookie";
import rId from "../utils/RandomId";

import CookiePolicy from "../components/CookiePolicy";

import './UseCookieAlert.css';

class UseCookieAlert extends Component{
  constructor(props){
    super(props);

    this.state = {
      showPolicy: false,
      isHover: false
    };

    this.onShowCookiePolicy = this.onShowCookiePolicy.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onLeave = this.onLeave.bind(this);
  }

  componentDidMount() {
    if(Cookie.Exists('FRTSACCS')){
      this.refs['node'].remove();
    }else{
      let cont = 1;

      Cookie.CreateOrUpdate('FRTSACCS', rId());

      setInterval(() => {
        if(cont === 10) this.refs['node'].classList.add('hide');
        if(cont === 11) this.refs['node'].remove();

        if(!this.state.isHover) cont++;
      }, 1000);
    }
  }

  onShowCookiePolicy(){
    if(this.state.showPolicy)
      this.onLeave();
    else
      this.onHover();

    this.setState({ showPolicy: !this.state.showPolicy });
  }

  onHover(){
    this.setState({ isHover: true });
  }

  onLeave(){
    this.setState({ isHover: false });
  }

  render(){
    return (
      <div ref='node' className='UseCookieAlert' onMouseEnter={this.onHover} onMouseLeave={this.onLeave}>
        <p className='UseCookieAlert--content'>Hacemos el uso de cookies para ofrecer una mejor experiencia de navegación. Al continuar con la navegación entendemos que aceptas nuestra <b>Política de cookies</b>.</p>

        <button className='UseCookieAlert--btn' onClick={this.onShowCookiePolicy}>Leer más</button>

        {
          (this.state.showPolicy)
            ? <CookiePolicy onCloseCookiePolicy={this.onShowCookiePolicy}/>
            : null
        }
      </div>
    );
  }
}

export default UseCookieAlert;
