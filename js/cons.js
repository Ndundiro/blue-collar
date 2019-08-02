$(document).ready(function(){
  $(".btn2").click(function(){
    $(".locations").slideToggle(500);
    // $(".btn").click(function(){
    //   $(".locations").slideUp(500)
    // })
  })
$(".sub").submit(function(){
  event.preventDefault();
  if($("#name").val() == ""){
    alert("Your name is needed")
    return false;
  }
  else if($("#email").val() == ""){
    alert("Your email is needed")
    return false;

  }
  alert("Thank you")
})
  $("#umoja").click(function(){
      $(".locations").slideUp(400)
    $(".umoja").slideDown("slow")
    $('html, body').animate({
     scrollTop: $("#buru-top").offset().top
   }, 1000);
   var items =[".westlands",".kawangware",".ngong",".buru-buru"];
   items.forEach(function(item){
     return $(item).hide();
   })
  })

  $("#westi").click(function(){
      $(".locations").slideUp(400)
    $(".westlands").slideDown("slow")
    $('html, body').animate({
     scrollTop: $("#buru-top").offset().top
   }, 1000);

   var items =[".umoja",".kawangware",".ngong",".buru-buru"];
   items.forEach(function(item){
     return $(item).hide();
   })
 })

  $("#kawa").click(function(){
      $(".locations").slideUp(400)
    $(".kawangware").slideDown("slow")
    $('html, body').animate({
     scrollTop: $("#buru-top").offset().top
   }, 1000);

   var items =[".westlands",".umoja",".ngong",".buru-buru"];
   items.forEach(function(item){
     return $(item).hide();
   })
  })

  $("#ngong").click(function(){
      $(".locations").slideUp(400)
    $(".ngong").slideDown("slow")
    $('html, body').animate({
     scrollTop: $("#buru-top").offset().top
   }, 1000);
   var items =[".westlands",".kawangware",".umoja",".buru-buru"];
   items.forEach(function(item){
     return $(item).hide();
   })
  })

  $("#buruburu").click(function(){
      $(".locations").slideUp(400)
    $(".buru-buru").slideDown("slow")
    $('html, body').animate({
     scrollTop: $("#buru-top").offset().top
   }, 1000);
   var items =[".westlands",".kawangware",".ngong"];
   items.forEach(function(item){
     return $(item).hide();
   })
  })
})
