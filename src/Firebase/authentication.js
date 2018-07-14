import {auth} from './Fire'

export const userSignup = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password) //this will return promise
}

export const userLogin = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password)
}

export const userLogout = () => {
  return auth.signOut()
}