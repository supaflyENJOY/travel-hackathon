import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import Search from './Components/Search';
import Landing from './Components/Landing'

class App extends Component {


  render() {

    return (
      <Router>
        <Switch>
          <Route exact path='/'><Landing /></Route>
          <Route exact path='/home'><Search /></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
