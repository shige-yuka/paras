import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "111***********",
      authDomain: "***********",
      databaseURL: "***********",
      projectId: "***********",
      storageBucket: "***********",
      messagingSenderId: "***********"
    }
  )
}

export default firebase