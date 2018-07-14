import firebase from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAdCKhRoV_3U01U_mqF5GaLw6X5KvsfLno",
  authDomain: "burger-builder-162ad.firebaseapp.com",
  databaseURL: "https://burger-builder-162ad.firebaseio.com",
  projectId: "burger-builder-162ad",
  storageBucket: "burger-builder-162ad.appspot.com",
  messagingSenderId: "301396000240"
};

if(!firebase.apps.length) {
 firebase.initializeApp(config)
}

export const auth = firebase.auth();