import React from 'react';

import Header from "./Header";
import UseCookieAlert from "./UseCookieAlert";
import Footer from "./Footer";
import Target from "./Target";
import Map from "../components/Map";

function Main(){
  return (
    <section>
      <Header/>
      <Map/>
      <Target/>
      <UseCookieAlert/>
      <Footer/>
    </section>
  );
}

export default Main;
