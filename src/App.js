import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Landing from "./sections/Landing";
import Main from "./sections/Main";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/inicio" component={Main}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
