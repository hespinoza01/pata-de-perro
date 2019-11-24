import React, {Component} from 'react';

import Footer from './sections/Footer';
import Landing from "./sections/Landing";

import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Landing></Landing>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
