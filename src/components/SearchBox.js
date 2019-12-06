import React from 'react';

import './SearchBox.css'

function SearchBox({placeholder, onSubmit, onChange}){
  return (
    <form className='searchbox' action="" onSubmit={onSubmit}>
      <input className='searchbox-input' type="text" placeholder={placeholder} onChange={onChange} required/>
      <button className='searchbox-submit'>Buscar <i className='fa fa-search'> </i></button>
    </form>
  );
}

export default SearchBox;
