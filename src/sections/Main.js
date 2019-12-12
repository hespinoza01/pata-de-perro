import React from 'react';

import Header from "./Header";
import UseCookieAlert from "./UseCookieAlert";
import Footer from "./Footer";
import Target from "./Target";

function Main(){
  return (
    <section>
      <Header/>
      <Target/>
      <UseCookieAlert/>
      <Footer/>
    </section>
  );
}

export default Main;
