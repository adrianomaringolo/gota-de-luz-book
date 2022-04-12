// Copy and paste this into your JavaScript code to initialize the Firebase SDK.
// You will also need to load the Firebase SDK.
// See https://firebase.google.com/docs/web/setup for more details.

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCevSBZ4T8wX_pk_Ki2nIZgZqouzGJnN1Y",
  authDomain: "gota-de-luz.firebaseapp.com",
  projectId: "gota-de-luz",
  storageBucket: "gota-de-luz.appspot.com",
  messagingSenderId: "215101370709",
  appId: "1:215101370709:web:faa188fe2172084037bfdc",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore();

export default firebase;
export { db };
