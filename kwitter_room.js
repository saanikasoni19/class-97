
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

function addRoom(){
    room_name = document.getElementById("RoomName").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    })
    localStorage.setItem("RoomName", room_name);
    window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById
      ("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' > #"+ Room_names 
      +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });
});
}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("RoomName", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("User");
      localStorage.removeItem("RoomName");
      window.location="index.html";
}