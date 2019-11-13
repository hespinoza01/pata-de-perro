import React from 'react';

import './SearchBox.css'

function SearchBox(props){
  return (
    <form className='searchbox' action="">
      <input className='searchbox-input' type="text"/>
      <button className='searchbox-submit'>Buscar <i className='fa fa-search'> </i></button>
    </form>
  );
}

export default SearchBox;
