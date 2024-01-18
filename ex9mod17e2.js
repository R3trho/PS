$(document).ready(function(){
    $("#por0").click(function() {
    $("#por1").css("background-color", "red");
    $("#por2").css("background-color", "red");
    $("#por3").css("background-color", "red");
    })
    $("#bel0").click(function() {
    $("#bel1").css("background-color", "black");
    $("#bel2").css("background-color", "black");
    $("#bel3").css("background-color", "red");
    })
    $("#fra0").click(function() {
    $("#fra1").css("background-color", "white");
    $("#fra2").css("background-color", "white");
    $("#fra3").css("background-color", "white");
    })
    $("#por2").click(function(){
        $("#por2").css("background-color", "yellow");
        $("#por1").css("background-color", "green");
    })
    $("#bel1").click(function(){
        $("#bel1").css("background-color", "black");
        $("#bel2").css("background-color", "yellow");
    })
    $("#fra1").click(function(){
        $("#fra1").css("background-color", "blue");
        $("#fra2").css("background-color", "white");
        $("#fra3").css("background-color", "red");
    })
    $("#fra2").click(function(){
        $("#fra2").css("background-color", "white");
        $("#fra3").css("background-color", "red");
        $("#fra1").css("background-color", "blue");
        
    })
    $("#fra3").click(function(){
        $("#fra3").css("background-color", "red");
        $("#fra2").css("background-color", "white");
        $("#fra1").css("background-color", "blue");
    })
})
