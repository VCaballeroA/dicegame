/* Program written by: Valentina Caballero (vcaballe)
Date: Tuesday, April 4, 2017.
Purpose: This JavaScript program is part 1 of 3 for the HIGH or LOW dice game. It runs the functions for the main page of the game. */

//Loads event listeners before the entire webpage loads first.
window.onload = function() {
    prepareListeners();
}

//Adds a "click" event listener to the "Start" button.
function prepareListeners() {
    var startButton; 
    startButton = document.getElementById("start");
    startButton.addEventListener("click",startGame);
}

//Redirects users to "vcaballeassign3_1.html", the game set up page where Player 1 and Player 2's names are inputted and the type of dice game they want to play is selected
function startGame () {
    location.replace("vcaballeassign3_1.html");
}





