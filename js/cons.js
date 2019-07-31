$(document).ready(function(){
  $(".btn").click(function(){
    $(".locations").slideDown(500);
    $(".btn").click(function(){
      $(".locations").slideUp(500)
    })
  })
})
