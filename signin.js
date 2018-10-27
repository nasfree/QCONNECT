// Initialize Firebase
var config = {
  apiKey: "AIzaSyAkwsP3t3xAolOKxnDOs95z1crtNqMjJJg",
  authDomain: "qconnect-d0b51.firebaseapp.com",
  databaseURL: "https://qconnect-d0b51.firebaseio.com",
  projectId: "qconnect-d0b51",
  storageBucket: "",
  messagingSenderId: "553778053970"
};
firebase.initializeApp(config);
// let users = firebase.database().ref("users");
//
//  let username = document.querySelector('#username');
//  let passWord = document.querySelector('#password');
 firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
   let errorCode = error.code;
   let errorMessage = error.message;
 })
