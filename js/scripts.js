$(document).ready(function(){
  $("button#hello").click(function(){
    $("ul#sentanceOne").prepend("<li>hello</li>")//prepend means to put in at the beginning
    $("ul#sentanceTwo").prepend("<li>hello there</li>")

    $("li").css("background-color", "lightblue")
  });

  $("button#goodbye").click(function(){
    $("ul#sentanceOne").prepend("<li>goodbye</li>")
    $("ul#sentanceTwo").prepend("<li>bye</li>")
  });

  $("button#copying").click(function(){
    $("ul#sentanceOne").prepend("<li>stop copying me</li>")
    $("ul#sentanceTwo").prepend("<li>no you stop copying me</li>")
  });

  $("#delete").click(function(){
    $("#sentanceOne").hide()
    $("#sentanceTwo").hide()
  })



});
