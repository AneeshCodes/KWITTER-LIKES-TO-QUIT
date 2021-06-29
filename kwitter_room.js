username = localStorage.getItem("username")
document.getElementById('username').innerHTML = "Welcome " + username + "!";

//ADD YOUR FIREBASE LINKS HERE
   // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBbnoC3DASnA7AHmq-9tVA1B2O-5AaDk-c",
    authDomain: "instafoot-35022.firebaseapp.com",
    databaseURL: "https://instafoot-35022-default-rtdb.firebaseio.com",
    projectId: "instafoot-35022",
    storageBucket: "instafoot-35022.appspot.com",
    messagingSenderId: "844807225084",
    appId: "1:844807225084:web:506852c637a0a172056179"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function logout()
{
  localStorage.removeItem("username");
  localStorage.removeItem("Room_Name");
  window.location = "index.html";
}

function addroom()
{
  roomname = document.getElementById('roomname').value;
  firebase.database().ref("/").child(roomname).update({
    roomname: "value"
  });
  
  localStorage.setItem('Room_Name', roomname);
  window.location = "kwitter_page.html"
}
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("trendingrooms").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>"
      document.getElementById('trendingrooms').innerHTML +=  row; 
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem('Room_Name', name)
  window.location = "kwitter_page.html"
}