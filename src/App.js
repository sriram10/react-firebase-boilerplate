import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import {LOGIN, SIGNUP, DASHBOARD, HOME, LOGOUT} from './routesConfig'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Dashboard from './components/Dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Route exact path={HOME} component={Home} />
          <Route exact path={LOGIN} component={Login} />
          <Route exact path={SIGNUP} component={Signup} />
          <Route exact path={DASHBOARD} component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
