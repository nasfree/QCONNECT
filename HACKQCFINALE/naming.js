// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAkwsP3t3xAolOKxnDOs95z1crtNqMjJJg",
    authDomain: "qconnect-d0b51.firebaseapp.com",
    databaseURL: "https://qconnect-d0b51.firebaseio.com",
    projectId: "qconnect-d0b51",
    storageBucket: "qconnect-d0b51.appspot.com",
    messagingSenderId: "553778053970"
  };
  firebase.initializeApp(config);
      var database = firebase.database().ref("users");
      			var room = "data";
      			var data;
      			var user = firebase.auth().currentUser;
function onlo(){
				var name = prompt("Enter a username:", "");
				if (name == null || name == ""){
					use = "Guest";
				}
				else{
					use = name;
				}
        if(user){
          var uid = user.uid;
          database.child(uid).push(
						{
							"username": use,
						}
					 )
        }
        document.getElementById("p").innerHTML = "Welcome " + use;
			}
