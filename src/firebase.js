import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwPA2mrioQCGudiNkgymcZtzR3qxdJFVc",
  authDomain: "tinderclone-92582.firebaseapp.com",
  projectId: "tinderclone-92582",
  storageBucket: "tinderclone-92582.appspot.com",
  messagingSenderId: "101146048642",
  appId: "1:101146048642:web:a0012b8df3461784a01c9b",
  measurementId: "G-BRGTECZ9PJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
