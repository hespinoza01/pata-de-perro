import React, {Component} from 'react';

import Footer from './sections/Footer';
import Landing from "./sections/Landing";
import Header from "./sections/Header";

import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLanding: false,
      searchValue: '',
      category: {}
    };

    this.onHideLanding = this.onHideLanding.bind(this);
    this.onChangeSearchValue = this.onChangeSearchValue.bind(this);
  }

  onHideLanding(e){
    e.preventDefault();
    this.setState({isLanding: !this.state.isLanding});
  }

  onChangeSearchValue(e){
    this.setState({searchValue: e.target.value});
    console.log(this.state.searchValue);
  }

  render() {
    return (
      <div className="App">
        {
          (this.state.isLanding)
            ? <Landing onHideLanding={this.onHideLanding} onChangeSearchValue={this.onChangeSearchValue}/>
            : <Header onChangeSearchValue={this.onChangeSearchValue}/>
        }
        <Footer/>
      </div>
    );
  }
}

export default App;
