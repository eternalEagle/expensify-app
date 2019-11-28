import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCMFB1nLGzOZEmz4WjndPEcrPxtHFuv6oI",
  authDomain: "react-expensify-course-app.firebaseapp.com",
  databaseURL: "https://react-expensify-course-app.firebaseio.com",
  projectId: "react-expensify-course-app",
  storageBucket: "react-expensify-course-app.appspot.com",
  messagingSenderId: "118902712921",
  appId: "1:118902712921:web:c06a1af22877ca9f279f48",
  measurementId: "G-0MCWWNYEZ7"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
