import React from 'react';

import Header from "./Header";
import UseCookieAlert from "./UseCookieAlert";
import Footer from "./Footer";

function Main(){
  return (
    <section>
      <Header/>
      <UseCookieAlert/>
      <Footer/>
    </section>
  );
}

export default Main;
