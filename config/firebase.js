import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyC2dk8q0G4GjdYPYQdqlg5FXK3ETuT2URU",
    authDomain: "paras-3258b.firebaseapp.com",
    databaseURL: "https://paras-3258b.firebaseio.com",
    projectId: "paras-3258b",
    storageBucket: "paras-3258b.appspot.com",
    messagingSenderId: "1023663019269"
  })
}

export default firebase