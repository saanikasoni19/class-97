//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAZZsInbGFtv6vVzO1aqbtgDl3aLXLantw",
      authDomain: "kwitter-1e56a.firebaseapp.com",
      databaseURL: "https://kwitter-1e56a-default-rtdb.firebaseio.com",
      projectId: "kwitter-1e56a",
      storageBucket: "kwitter-1e56a.appspot.com",
      messagingSenderId: "378088901941",
      appId: "1:378088901941:web:2319e10f9584708820907c",
      measurementId: "G-L75J9YGWJE"
    };

firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
Name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + Name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-waring' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like +"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log("click on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      })
}

function logout(){
      localStorage.removeItem("User");
      localStorage.removeItem("RoomName");
      window.location="index.html";
}

User = localStorage.getItem("User");
room_name = localStorage.getItem("RoomName");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).update({
            name:User,
            message:msg,
            like:0
      });
      document.getElementById("msg").value= "";
}