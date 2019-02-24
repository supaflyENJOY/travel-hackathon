import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import Search from './Components/Search';

class App extends Component {


  render() {

    return (
      <Router>
        <Switch>
          <Route exact path='/'><Search /></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
