import React from 'react';

import './Card.css';

function Card({item}){
  return (
    <div className='card'>
      <label className='valor'><i className='fa fa-star'></i> {item.rating} ({ item.user_ratings_total }) </label>
      <h2>{ item.name }</h2>
      <p>Aqui tratando de hacer un proyecto en una noche</p>

      <a rel="noopener noreferrer"  href="https://vosdaledevelopers.com/equipo" target="_blank" className='btn-pag'>Mas informacion</a>
    </div>
  );
}

export default Card;
