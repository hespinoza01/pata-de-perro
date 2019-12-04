import React from 'react';

import './CookiePolicy.css';

function CookiePolicy({ onCloseCookiePolicy }){
  return (
    <div className='CookiePolicy'>
      <div className='CookiePolicy--content'>
        <button className='fa fa-close CookiePolicy--close' onClick={onCloseCookiePolicy}> </button>
        <h2>Política de cookies</h2>

        <p>El acceso a esta página web puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada usuario para que el servidor recuerde cierta información que posteriormente pueda utilizar. Esta información permite identificarle a usted como un usuario concreto y permite guardar sus preferencias personales, así como información técnica como puedan ser visitas o páginas concretas que visite.</p>

        <p>Aquellos usuarios que no deseen recibirlas o quieran ser informados antes de que se almacenen en su ordenador, pueden configurar su navegador a tal efecto.</p>

        <p>La mayor parte de los navegadores de hoy en día permiten la gestión de estas de 3 formas diferentes:</p>

        <p>Las cookies no se aceptan nunca.El navegador pregunta al usuario si se debe aceptar cada cookie.Las cookies se aceptan siempre.</p>

        <p>El navegador también puede incluir la posibilidad de especificar mejor qué cookies tienen que ser aceptadas y cuáles no. En concreto, el usuario puede normalmente aceptar alguna de las siguientes opciones: rechazar las cookies de determinados dominios; rechazar las de terceros; aceptarlas como no persistentes (se eliminan cuando el navegador se cierra); permitir al servidor crear cookies para un dominio diferente. Además, los navegadores pueden también permitir a los usuarios ver y borrar estas pequeñas cantidades de información individualmente.</p>

        <p>Dispones de más información en: <a href="http://es.wikipedia.org/wiki/Cookie">http://es.wikipedia.org/wiki/Cookie</a></p>
      </div>
    </div>
  );
}

export default CookiePolicy;
