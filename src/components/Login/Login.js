import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {SIGNUP, DASHBOARD} from '../../routesConfig'
import './styles.css'

import {userLogin} from '../../Firebase/authentication'


class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null
  }

  submitForm = (e) => {
    e.preventDefault();

    userLogin(this.state.email, this.state.password)
      .then((user) => {
        console.log('SUCCESS', user)
        this.props.history.push(DASHBOARD)
      })
      .catch(err => {
        console.log(err)
        this.setState({
          error: err.message || 'Something went wrong!'
        })
      })
    
  }

  changeEmail = (e) => {
    this.setState({email: e.target.value})
  }

  changePassword = (e) => {
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <div>
        <h1>
          Login Component
        </h1>
        <div className="container">
          <div className="card card-container">
            <img id="profile-img" alt="test" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" className="profile-name-card"></p>
            <form className="form-signin" onSubmit={this.submitForm}>
                <span id="reauth-email" className="reauth-email"></span>
                
                <input type="text" id="inputEmail" 
                  onChange={this.changeEmail}
                  className="form-control" placeholder="Email address" />
                
                <input type="password" id="inputPassword" 
                  onChange={this.changePassword}
                  className="form-control" placeholder="Password" />

                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Login</button>
            </form>
            <Link to={SIGNUP}>Dont have an account?</Link>
          </div>
          {
            this.state.error ? <strong>{this.state.error}</strong> : null
          }
        </div>
      </div>
   )
  }
}

export default Login