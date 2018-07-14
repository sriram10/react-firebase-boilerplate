import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { LOGIN, DASHBOARD } from '../../routesConfig';

import {userSignup} from '../../Firebase/authentication'

class Signup extends Component {
  state = {
    email: '',
    password1: '',
    password2: '',
    error: null
  }

  submitForm = (e) => {
    e.preventDefault();

    userSignup(this.state.email, this.state.password1)
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
    this.setState({password1: e.target.value})
  }

  changeConfirmPassword = (e) => {
    this.setState({password2: e.target.value})
  }

  render() {

    const invalidPassword = (this.state.password1 !== this.state.password2) || !this.state.password1; 

    return (
      <div>
        <h1>
          Signup Component
        </h1>
        <div className="container">
          <div className="card card-container">
            <img id="profile-img" alt="test" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" className="profile-name-card">
              {invalidPassword ? <strong>Check your Password!</strong> : null}
            </p>
            <form className="form-signin" onSubmit={this.submitForm}>
                <span id="reauth-email" className="reauth-email"></span>
                
                <input type="text" id="inputEmail" 
                  className="form-control"
                  value={this.state.email}
                  onChange={this.changeEmail} 
                  placeholder="Email address" />
                
                <input type="password" id="inputPassword1" 
                  className="form-control"
                  value={this.state.password1}
                  onChange={this.changePassword} 
                  placeholder="Password" />
                
                <input type="password" id="inputPassword2" 
                  className="form-control" 
                  value={this.state.password2}
                  onChange={this.changeConfirmPassword}
                  placeholder="Confirm Password" />

                <button className="btn btn-lg btn-primary btn-block btn-signin" 
                  type="submit" disabled={invalidPassword}>Create Account</button>
            </form>
            <Link to={LOGIN}>Already have an account?</Link>
          </div>
          {
            this.state.error ? <strong>{this.state.error}</strong> : null
          }
        </div>
      </div>
   )
  }
}

export default Signup