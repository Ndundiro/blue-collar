var loginStatus = localStorage.getItem('lStatus')

if (loginStatus == "false") {
  window.location.replace("index.html")
} else {
$(document).ready(function() {
  // debugger

    console.log("ready");
      console.log(loginStatus)
    var username = localStorage.getItem('username')
    $("#login-Msg").text("Hey " + username + ". Please Select a service ");

    $("#logOut").click(function() {
      localStorage.removeItem('lStatus')
      localStorage.setItem('lStatus', 'false')
      var out = localStorage.getItem('lStatus')
      // debugger
      if (out == "false") {
        window.location.replace("index.html")
        console.log("This is out "+out)
      }else{
        console.log("it is true");
      }
    })
})
}
