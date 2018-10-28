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
 var ui = new firebaseui.auth.AuthUI(firebase.auth());
 uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',

  signInSuccessUrl: 'classes.html',

  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};
ui.start('#firebaseui-auth-container', uiConfig);
let user = firebase.auth().currentUser;
let email = user.email;
if(user){
  var uid = user.uid;
  database.child(uid).set({
    email: email,
    password: pass,
  });
}
// function addInfo(){
//   var uname = document.getElementById("uname").value;
//   var email = document.getElementById("email").value;
//   var pass = document.getElementById("pass").value;
//
//
//   firebase.auth().createUserWithEmailAndPassword(email, pass).then(function (user){
//   });
//   firebase.auth().onAuthStateChanged(function(user) {
//     var uname = document.getElementById("uname").value;
//     var email = document.getElementById("email").value;
//     var pass = document.getElementById("pass").value;
//     if(user){
//       var uid = user.uid;
//       database.child(uid).set({
//         username: uname,
//         email: email,
//         password: pass,
//       });
//
//       document.getElementById("p").innerHTML = "Welcome " + uname + "!";
//       // var d = document.getElementById('form');
//       // d.parentNode.removeChild(form);
//
//       // var b = document.createElement("BUTTON");
//       // var text = document.createTextNode("switch");
//       // b.appendChild(text);
//       // document.body.appendChild(b);
//       // b.addEventListener("click", function(){
//       //     window.location.href="chatroom.html";
//       // });
//       // window.location.href="chatroom.html";
//     }
//     else{
//       return null;
//     }
//   });
//
//
// }
