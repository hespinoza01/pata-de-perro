import React from 'react';
import { withRouter } from 'react-router-dom';

import SearchBox from "../components/SearchBox";
import Filtros from "../components/Filtros";

import Logo from '../img/logo.png';
import './Header.css'

function Header(props){
  function goToLanding() {
    props.history.push('/');
  }

  return (
    <header className='header'>
      <img className='header-logo' src={Logo} alt="Logo" onClick={goToLanding}/>
      <div className='header-controls'>
        <SearchBox onChange={props.onChangeSearchValue}/>
        <Filtros/>
      </div>
    </header>
  );
}

export default withRouter(Header);
