
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAOjWDThg9QyzjVlwRBMJ0q_DO_bWKmgp8",
  authDomain: "kwitter-744e3c.firebaseapp.com",
  databaseURL: "https://kwitter-744e3c-default-rtdb.firebaseio.com",
  projectId: "kwitter-744e3c",
  storageBucket: "kwitter-744e3c.appspot.com",
  messagingSenderId: "634541138869",
  appId: "1:634541138869:web:2df7b2174ec2e6ef67effc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+ username + "!!";

    function add_room() {
    Room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(Room_name).update({ 
   purpose:"adding_room_name"  });

  localStorage.setItem("room_name",Room_name);
  window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name" + Room_names);

row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
console.log(row);
document.getElementById("output").innerHTML +=row;

  //End code
      });});}
getData();
function  redirectToRoomName(name){
  console.log(name); 
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}


