// Replace this data with your personal email and password

var masterUser = {
  email: "master@gmail.com",
  password: "master_collar"
}
localStorage.setItem('lStatus', 'false')
var loginStatus = localStorage.getItem('lStatus');
console.log(loginStatus);
//------------------|||||||
$(document).ready(function() {
  $(".target-signUp").hide()
  $(".switch").click(function() {
    $(".target").hide()
    $(".target-signUp").show()
    // $(".switch").text("login")
    $(".login-heading").text("Sign Up")
    $("#info").text("Have an Account?")
    $(".switch").click(function() {
      $(".target-signUp").hide()
      $(".target").show()
      $(".switch").text("Sign Up")
      $(".login-heading").text("Login")
      $("#info").text("Dont have an Account?")
    })
  })
  var localEmail = localStorage.getItem('email')
  var localPwd = localStorage.getItem('password')
  var localEmail2 = localStorage.getItem('email2')
  var localPwd2 = localStorage.getItem('password2')

  $(".target").submit(function() {
    event.preventDefault();
    var email = $(".email").val()
    var pwd = $(".password").val()
    // console.log(email + " " +  pwd)
    if (email == "") {
      alert("Email required")
      console.log($(".email").val())
      return false
    }
    if (pwd == "") {
      alert("your password is required")
      return false;
    } else if (email == masterUser.email) {
      if (pwd == masterUser.password) {
        localStorage.setItem('lStatus', 'true')
        window.location.replace("services.html")
      } else {
        alert("invalid password")
      }
    } else if (email == localEmail) {
      if (pwd == localPwd) {
        localStorage.setItem('lStatus', 'true')
        window.location.replace("services.html")
      } else {
        alert("invalid password")
      }
    } else if (email == localEmail2) {
      if (pwd == localPwd2) {
        // var locauser
        localStorage.setItem('lStatus', 'true')
        window.location.replace("services.html")
      } else {
        alert("invalid password")
      }
    } else {
      alert("Invalid email")
    }


  })

  $(".target-signUp").submit(function() {
    event.preventDefault();
    var username = $("#username").val()
    var email = $("#email").val()
    var pwd = $("#password").val()
    var cpwd = $("#cpassword").val()

    if (localEmail !== "") {
      if (username == "") {
        alert("Your username is required");
      } else if (email == "") {
        alert("Your Email is required");
      } else if (pwd == "") {
        alert("Your password os required");
      } else if (cpwd == "") {
        alert("Confirm your password")
      } else if (pwd !== cpwd) {
        alert("Passwords dont match")
      } else {
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', pwd);
        alert("Account Created. Taking you to Login")
        window.location.replace("login.html");
      }
    } else {
      if (username == "") {
        alert("Your username is required");
      } else if (email == "") {
        alert("Your Email is required");
      } else if (pwd == "") {
        alert("Your password os required");
      } else if (cpwd == "") {
        alert("Confirm your password")
      } else if (pwd !== cpwd) {
        alert("Passwords dont match")
      } else {
        localStorage.setItem('username2', username);
        localStorage.setItem('email2', email);
        localStorage.setItem('password2', pwd);
        alert("Account Created. Taking you to Login")
        window.location.replace("login.html");
      }
    }
  })
})
