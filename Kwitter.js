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
function addUser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "Kwitter_room.html";
}