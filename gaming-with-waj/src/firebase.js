import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
      apiKey: "AIzaSyBqW-BmEGccm95ea__R6DmeOxj6qgefBNc",
      authDomain: "gaming-with-waj.firebaseapp.com",
      databaseURL: "https://gaming-with-waj.firebaseio.com",
      projectId: "gaming-with-waj",
      storageBucket: "gaming-with-waj.appspot.com",
      messagingSenderId: "355764451746",
      appId: "1:355764451746:web:eb5bb6b02ac33bd5b99afb",
      measurementId: "G-F6FHLRNP5J"
});

  const auth = firebase.auth();

  export { auth };

  // const firebaseConfig = {
  //   apiKey: "AIzaSyBqW-BmEGccm95ea__R6DmeOxj6qgefBNc",
  //   authDomain: "gaming-with-waj.firebaseapp.com",
  //   databaseURL: "https://gaming-with-waj.firebaseio.com",
  //   projectId: "gaming-with-waj",
  //   storageBucket: "gaming-with-waj.appspot.com",
  //   messagingSenderId: "355764451746",
  //   appId: "1:355764451746:web:eb5bb6b02ac33bd5b99afb",
  //   measurementId: "G-F6FHLRNP5J"
  // };