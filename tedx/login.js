document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email === "murtuza@tedx.iith.ac.in" && password === "123456789") {
      alert("Login successful for murtuza@tedx.iith.ac.in!");
      window.location.href = "home.html";
    } 
     else {
      alert("Invalid email or password. Please try again.");
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    }
  });