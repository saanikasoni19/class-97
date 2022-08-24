function login() {
    var User = document.getElementById("User").value;
    localStorage.setItem("User", User);

    window.location="kwitter_room.html";
}