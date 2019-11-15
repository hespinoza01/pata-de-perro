import React from 'react';

import icon from '../img/markercurrent.svg';

function CurrentPin() {
  return (
    <img src={icon} style={{width: '1.75rem'}} alt="Posisión actual"/>
  );
}

export default CurrentPin;
