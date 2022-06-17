const firebaseConfig = {
    apiKey: "AIzaSyDdRRmGSDJ2pg-Szc1Sb0TpNY8eRvlVdWo",
    authDomain: "kwitterwebappproject-dcfb7.firebaseapp.com",
    databaseURL: "https://kwitterwebappproject-dcfb7-default-rtdb.firebaseio.com",
    projectId: "kwitterwebappproject-dcfb7",
    storageBucket: "kwitterwebappproject-dcfb7.appspot.com",
    messagingSenderId: "327754866145",
    appId: "1:327754866145:web:b9416d4bafae7a4b7906a0",
    measurementId: "G-BX63QVJSKP"
  };
  function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "Kwitter_room.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Room Name - " + Room_names);
      row= "<div class='room_name' id="+Room_names+ "onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", namme);
      window.location ="Kwitter_room.html";
}
function logout(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location = "index.html"
}