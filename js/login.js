// Replace this data with your personal email and password

var masterUser = {
  email: "master@gmail.com",
  password: "master_collar"
}

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
            return true;
            window.location.replace("index.html")
          } else {
            alert("invalid password")
          }
        } else if (email == localEmail) {
          if (pwd == localPwd) {
            window.location.replace("index.html")
          } else {
            alert("invalid password")
          }
        } else if (email == localEmail2) {
          if (pwd == localPwd2) {
            // var locauser
            window.location.replace("index.html")
          } else {
            alert("invalid password")
          }
        }else {
          alert("Invalid email")
        }


      })

      })
