import React from 'react';
import './SocialIcons.css'

function SocialIcons(){

  return (
    <div className='socialbar'>
      <a href="http://localhost:3000" title='Facebook'><i className='fa fa-facebook'> </i></a>
      <a href="http://localhost:3000" title='Twitter'><i className='fa fa-twitter'> </i></a>
      <a href="http://localhost:3000" title='Instagram'><i className='fa fa-instagram'> </i></a>
    </div>
  );
}

export default SocialIcons;
