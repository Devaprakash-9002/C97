// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB_TEHlv3T_6djFnw9T8ovQk8Qlo4QR5Ek",
    authDomain: "kwitter-a2e4a.firebaseapp.com",
    databaseURL: "https://kwitter-a2e4a-default-rtdb.firebaseio.com",
    projectId: "kwitter-a2e4a",
    storageBucket: "kwitter-a2e4a.appspot.com",
    messagingSenderId: "252855466719",
    appId: "1:252855466719:web:0637fa8a3c04d30ae9076a",
    measurementId: "G-DL1ZE7LYCJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome, " + user_name + "!";

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("room name = " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>"; 
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Adding a room"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room name", name);
  window.location("kwitter_page.html");
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}