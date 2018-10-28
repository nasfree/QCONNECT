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

			function addInfo(){
				var uname = document.getElementById("uname").value;
				var email = document.getElementById("email").value;
				var pass = document.getElementById("pass").value;


				firebase.auth().createUserWithEmailAndPassword(email, pass).then(function (user){
				});
				firebase.auth().onAuthStateChanged(function(user) {
					var uname = document.getElementById("uname").value;
					var email = document.getElementById("email").value;
					var pass = document.getElementById("pass").value;
					if(user){
						var uid = user.uid;
						database.child(uid).set({
							username: uname,
							email: email,
							password: pass,
						});

						// var d = document.getElementById('form');
 						// d.parentNode.removeChild(form);

 						// var b = document.createElement("BUTTON");
 						// var text = document.createTextNode("switch");
 						// b.appendChild(text);
 						// document.body.appendChild(b);
 						// b.addEventListener("click", function(){
						//     window.location.href="chatroom.html";
						// });
 						// window.location.href="chatroom.html";
					}
					else{
						return null;
					}
				});


			}

			firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
			.then(function() {
				// Existing and future Auth states are now persisted in the current
				// session only. Closing the window would clear any existing state even
				// if a user forgets to sign out.
				// ...
				// New sign-in will be persisted with session persistence.
				return firebase.auth().signInWithEmailAndPassword(email, pass);
			})
			.catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
			});
