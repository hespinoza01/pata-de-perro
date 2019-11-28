import React from 'react';

import SearchBox from "../components/SearchBox";
import Filtros from "../components/Filtros";

import Logo from '../img/logo.png';
import './Header.css'

function Header({onChangeSearchValue}){
  return (
    <header className='header'>
      <img className='header-logo' src={Logo} alt="Logo"/>
      <div className='header-controls'>
        <SearchBox onChange={onChangeSearchValue}/>
        <Filtros/>
      </div>
    </header>
  );
}

export default Header;
