$(document).keydown(function(event){
    $("h1").text(event.key);
})

$("button").click(function(event){
    $("h1").text("Ouch Ouch Ouch");
    $("h1").css("color", "red");
})