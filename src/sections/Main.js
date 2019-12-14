import React from 'react';

import Header from "./Header";
import UseCookieAlert from "./UseCookieAlert";
import Footer from "./Footer";
import Map from "../components/Map";

function Main(){
  return (
    <section>
      <Header/>
      <Map/>
      <UseCookieAlert/>
      <Footer/>
    </section>
  );
}

export default Main;
