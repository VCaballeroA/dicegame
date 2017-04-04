/* Program written by: Valentina Caballero (vcaballe)
Date: Tuesday, April 4, 2017.
Purpose: This JavaScript program is part 2 of 3 for the HIGH or LOW dice game. It  runs the functions that record Player 1 and Player 2's names and what kind of game they would like to play (e.g. Highest Number Wins or Lowest Number Wins). */

//Global variables for Player 1 and Player 2's names + An array with the values "Highest" and "Lowest" which will be used in the main titles for each game session. 
var personName1, personName2;
var game = ["Highest","Lowest"];

// Records Player 1 and Player 2's names from the webpage's textbox fields while redirecting players to the "Highest Number Wins" game. 
function playGameHigher() { 
    localStorage.personName1 = document.getElementById("nameOne").value; 
    localStorage.personName2 = document.getElementById("nameTwo").value;
    localStorage.game = "Highest";

    location.replace("vcaballeassign3_2.html");
}

// Records Player 1 and Player 2's names from the webpage's textbox fields while redirecting players to the "Lowest Number Wins" game. 
function playGameLower() { 
    localStorage.personName1 = document.getElementById("nameOne").value; 
    localStorage.personName2 = document.getElementById("nameTwo").value;
    localStorage.game = "Lowest";
    
    location.replace("vcaballeassign3_2.html");
}

//Brings users to "vcaballeassign3_3.html" when they click on the "?" button in order to provide instructions on how to play the HIGH or LOW dice games 
function explainGame() {
    window.open("vcaballeassign3_3.html");
}
