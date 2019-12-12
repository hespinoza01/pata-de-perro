import React from 'react';

import icon from '../img/markercurrent.svg';

function CurrentPin() {
  return (
    <img src={icon} style={{width: '1.75rem'}} alt="Posisión actual"/>
  );
}

function PlacePin(){
  return (
    <span className='fa fa-map-marker' style={{width: '1.75rem', color: 'royalblue'}}> </span>
  );
}

export default CurrentPin;
export {PlacePin};
