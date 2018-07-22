import React, { Component } from 'react'
import {connect} from 'react-redux'

import {startTimer, stopTimer} from '../../store/actionTypes'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <button type='button' onClick={this.props.startCounter}>START</button>
        <button type='button' onClick={this.props.stopCounter}>STOP</button>
        <h1>{this.props.counter}</h1>

      </div>
   )
  }
}

const mapStoreToProps = store => {
  return {
    counter: store.counter
  }
}

const mapD2P = d => {
  return {
    startCounter: () => d(startTimer()),
    stopCounter: () => d(stopTimer())
  }
}
export default connect(mapStoreToProps, mapD2P)(Home)