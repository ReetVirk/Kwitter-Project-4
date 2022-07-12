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

  username = localStorage.getItem("Username");

  document.getElementById("username").innerHTML = "Welcome " + username + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoom(this.id)'> # " + Room_names + " <hr> </div>";

      document.getElementById("output").innerHTML += row;

    //End code
    });});}
getData();

function addRoom(){

  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({

        purpose: "Adding room name"

  });

  localStorage.setItem("Room Name", room_name);

  window.location = "kwitter_page.html";

}

function redirectToRoom(name){

  console.log(name);

  localStorage.setItem("Room Name", name);

  window.location = "kwitter_page.html";

}

function logout(){

  localStorage.removeItem("Username");
  localStorage.removeItem("Room Name");

  window.location = "index.html";

}