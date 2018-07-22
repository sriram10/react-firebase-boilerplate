import {ADD_USER} from './actionTypes'
import { stat } from 'fs';

const initialState = {
  user: null,
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.data,
        token: action.data ? state.token : null
      }
    case 'ADDTOKEN':
      return {
        ...state,
        token: action.data
      }
    case 'STARTTIMER':
      return {
        ...state,
        counter: state.counter + action.data
      }
    case 'STOPTIMER':
      return {
        ...state,
        counter: action.data
      }
    default:
      return state;
  }
}

export default reducer