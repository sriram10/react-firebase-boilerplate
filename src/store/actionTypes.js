import Axios from "../../node_modules/axios";
import FirebaseAPI from '../axios.firebase' 
export const ADD_USER = 'ADD_USER'

//action creators
export const addUserAction = (data=null) => {
  return {
    type: ADD_USER,
    data: data
  }
}

export const stopTimer = () => {
  return {
    type: 'STOPTIMER',
    data: 0
  }
}

export const startTimer = () => {
  return (dispatch) => {
    // setTimeout(() => {
    //   dispatch({
    //       type: 'STARTTIMER',
    //       data: 6
    //     })
    // }, 5000)
    FirebaseAPI.get('/blogs.json')
    .then(res => {
      dispatch({
        type: 'STARTTIMER',
        data: Object.keys(res.data).length
      })
    })
    .catch(err => {
      dispatch({
        type: 'STOPTIMER',
        data: 0
      })
    })
  }
}

