import React, {Component} from 'react';

import Footer from './sections/Footer';
import Map from "./components/Map";
import Header from "./sections/Header";

import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Map></Map>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
