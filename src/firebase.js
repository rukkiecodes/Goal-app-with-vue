import firebase from 'firebase';
require("firebase/firestore");
// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBFAUxj1BHqhqQbxZrO91Lp4GzJTfBXLWA",
    authDomain: "goal-app-a4889.firebaseapp.com",
    databaseURL: "https://goal-app-a4889.firebaseio.com",
    projectId: "goal-app-a4889",
    storageBucket: "goal-app-a4889.appspot.com",
    messagingSenderId: "179217429875",
    appId: "1:179217429875:web:8d84deb3b7142e5f"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {fb,db}