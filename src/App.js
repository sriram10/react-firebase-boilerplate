import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import {LOGIN, SIGNUP, DASHBOARD, HOME, LOGOUT} from './routesConfig'
import {connect} from 'react-redux'

import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Dashboard from './components/Dashboard/Dashboard'
import Wrap from './components/hoc/Wrap';

class App extends Component {
  componentDidMount(){
    const t = localStorage.getItem('user');
    this.props.addUserToken(t);
  } 

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path={HOME} component={Home} />
            {
              (this.props.user || this.props.token) ? 
                <Route exact path={DASHBOARD} component={Dashboard} />
                : 
                [
                  <Route key={LOGIN} exact path={LOGIN} component={Login} />,
                  <Route key={SIGNUP} exact path={SIGNUP} component={Signup} />
                ]
            }
            <Redirect to={HOME} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}


const mapStoreToProps = store => {
  return {
    user: store.user,
    token: store.token
  }
}

const mapDispatchToProps = dispatchEvent => {
  return {
    addUserToken: t => dispatchEvent({type: 'ADDTOKEN', data: t})
  }
}
export default connect(mapStoreToProps, mapDispatchToProps)(App);
