const firebaseConfig = {
    apiKey: "AIzaSyC1gjqi975qG4uPVn3-NNm-qXDH29paM2c",
    authDomain: "kwitter-project-83495.firebaseapp.com",
    databaseURL: "https://kwitter-project-83495-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-83495",
    storageBucket: "kwitter-project-83495.appspot.com",
    messagingSenderId: "393518419043",
    appId: "1:393518419043:web:a849824c9650a1ba7cbc56"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    room_name = localStorage.getItem("Room Name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send() {

    msg = document.getElementById("msg").value;

    firebase.database().ref(room_name).push({

          name:user_name,
          message:msg,
          like:0

    });

    document.getElementById("msg").value = "";

}

function logout(){

    localStorage.removeItem("Username");
    localStorage.removeItem("Room Name");

    window.location = "index.html";

}