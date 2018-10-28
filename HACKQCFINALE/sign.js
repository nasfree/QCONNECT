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

var database = firebase.database().ref("users");
var room = "data";
var data;
var user = firebase.auth().currentUser;

function signin(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    alert(errorMessage);
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      window.location.href = "classpage.html";
      // User is signed in.
    } else {
      // No user is signed in.
    }
  });
}
