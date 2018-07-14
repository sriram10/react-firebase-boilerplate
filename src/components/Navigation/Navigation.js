import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import * as routes from '../../routesConfig'
import {userLogout} from '../../Firebase/authentication'
import './styles.css'

class Navigation extends Component {

  logoutUser = (e) => {
    e.preventDefault();
    userLogout()
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <header className='navigation'>
        <ul style={{listStyle:'none', margin:0}}>
          <li><NavLink className='link' to={routes.HOME} activeClassName='activehome'>Home</NavLink></li>
          <li><NavLink className='link' to={routes.LOGIN} >Login</NavLink></li>
          <li><NavLink className='link' to={routes.SIGNUP} >Signup</NavLink></li>
          <li><Link className='link' to='#' onClick={this.logoutUser}>Logout</Link></li>
          <li><NavLink className='link' to={routes.DASHBOARD} >Dashboard</NavLink></li>
        </ul>
      </header>
   )
  }
}

export default Navigation