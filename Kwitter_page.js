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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

    } });  }); }
getData();
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}