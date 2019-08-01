var loginStatus = localStorage.getItem('lStatus')

if (loginStatus == "false") {
  window.location.replace("index.html")
} else {
  $(document).ready(function() {

    console.log("logged in");

  })
}
