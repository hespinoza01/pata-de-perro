import React, {Component} from 'react';

import Footer from './sections/Footer';
import Landing from "./sections/Landing";
import Header from "./sections/Header";

import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLanding: true
    };

    this.onHideLanding = this.onHideLanding.bind(this);
  }

  onHideLanding(e){
    e.preventDefault();
    this.setState({isLanding: !this.state.isLanding});
  }

  render() {
    return (
      <div className="App">
        {
          (this.state.isLanding)
            ? <Landing onHideLanding={this.onHideLanding}/>
            : <Header/>
        }
        <Footer/>
      </div>
    );
  }
}

export default App;
