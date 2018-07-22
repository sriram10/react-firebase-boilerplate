import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as routes from '../../routesConfig'

import { addUserAction } from '../../store/actionTypes'
import {userLogout} from '../../Firebase/authentication'
import './styles.css'
import Wrap from '../hoc/Wrap';

class Navigation extends Component {

  logoutUser = (e) => {
    e.preventDefault();
    userLogout()
      .then(res => {
        localStorage.removeItem('user')
        this.props.removeUser()
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <header className='navigation'>
        <ul style={{listStyle:'none', margin:0}}>
          <li><NavLink exact className='link' to={routes.HOME}>Home</NavLink></li>
          {
            (this.props.user || this.props.token) ? 
              <Wrap>
                <li><NavLink exact className='link' to={routes.DASHBOARD} >Dashboard</NavLink></li>
                <li><Link className='link' to='/' onClick={this.logoutUser}>Logout</Link></li>
              </Wrap>
              : 
              <Wrap>
                <li><NavLink exact className='link' to={routes.LOGIN} >Login</NavLink></li>
                <li><NavLink exact className='link' to={routes.SIGNUP} >Signup</NavLink></li>
              </Wrap>
          }
        </ul>
      </header>
   )
  }
}

const mapStoreToProps = store => {
  return {
    user: store.user,
    token: store.token
  }
}


const mapDispatchToProps = dispatch => {
  return {
    removeUser: () => dispatch(addUserAction())
  }
}


export default connect(mapStoreToProps, mapDispatchToProps)(Navigation)