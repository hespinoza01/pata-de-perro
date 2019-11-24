import React from 'react';

import './SearchBox.css'

function SearchBox({placeholder}){
  return (
    <form className='searchbox' action="">
      <input className='searchbox-input' type="text" placeholder={placeholder}/>
      <button className='searchbox-submit'>Buscar <i className='fa fa-search'> </i></button>
    </form>
  );
}

export default SearchBox;
