/// We dont import the hole lib firebase to avoid having any error from the console
/// npm install firebase
import firebase from '@firebase/app'; 
import '@firebase/firestore';
import '@firebase/auth'
import 'firebase/storage'

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAySAfauzF0C_jzbkGJAsf4a0gteL5eLgU",
    authDomain: "layali-alsham.firebaseapp.com",
    databaseURL: "https://layali-alsham.firebaseio.com",
    projectId: "layali-alsham",
    storageBucket: "layali-alsham.appspot.com",
    messagingSenderId: "1015707540616"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true})
  const storage = firebase.storage()
  const storageRef = storage.ref();

  export {
    storage,
    storageRef,
    firebase as default
  } 