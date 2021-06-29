//YOUR FIREBASE LINKS
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
    
    username = localStorage.getItem("username");
    room_name = localStorage.getItem("Room_Name");

function send()
{
      msg = document.getElementById('msg').value;
      firebase.database().ref(room_name).push({
            name: username,
            message: msg,
            like: 0
      });
      document.getElementById('msg').value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like']

namewithtag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>"
messagewithtag = "<h4 class='message_h4'>" + message + "</h4>"
likebutton = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>"
spanwidthtag = "<span  class='glyphicon glyphicon-thumbs-up'>like: " + like + "</span></button><hr>"

row = namewithtag + messagewithtag + likebutton + spanwidthtag
document.getElementById('output').innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(messageid)
{
      buttonid = messageid;
      likes = document.getElementById('buttonid').value
      updatedLike = Number(likes) + 1 

      firebase.database().ref(room_name).child(messageid).update({
            like: updatedLike
      });
}

function logout()
{
  localStorage.removeItem("username");
  localStorage.removeItem("Room_Name");
  window.location = "index.html";
}