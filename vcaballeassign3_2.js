/* Program written by: Valentina Caballero (vcaballe)
Date: Tuesday, April 4, 2017.
Purpose: This JavaScript program is part 3 of 3 for the HIGH or LOW dice game. It  runs the functions that bring players to the "Highest Number Wins" or "Lowest Number Wins" games, announces who wins each game session and gives players the option to play again or return to the website's main page once they have used up all of their four rolls.*/

// Global variables representing the 4 blank box slots for both Player 1 and Player 2.
var p1ran1 = " ";
var p1ran2 = " "; 
var p1ran3 = " ";  
var p1ran4 = " ";

var p2ran1 = " ";
var p2ran2 = " "; 
var p2ran3 = " ";  
var p2ran4 = " ";

//Global variable that counts down the total amount of rolls left for both players (used later to trigger the announceWinner() function).
var tryCounter = 8;

//Global variables that tally the total score for both Player 1 and Player 2
var player1Score = 0;
var player2Score = 0;

//
function initialize() {
    document.getElementById("playerOne").innerHTML = localStorage.personName1;
    
    document.getElementById("playerTwo").innerHTML = localStorage.personName2;
    
    document.getElementById("titles").innerHTML = localStorage.game + " Number Wins";
    
    document.getElementById("playAgain").style.visibility = "hidden";
    document.getElementById("backHome").style.visibility = "hidden";
    
    document.getElementById("player1Area").style.visibility = "visible";
    document.getElementById("player2Area").style.visibility = "hidden";
}

/* This series of functions serve as random number generators for each digit of Player 1's four-digit number. 

It also does the following: 
1. Keeps track of how many rolls out of 8 (since each player gets 4 rolls) are left in the game 
2. Makes the box slots disappear once the player clicks on them. 
3. Calls the disablePlayer1() function in order to disable Player 1's box slots and enable those of Player 2.
*/ 
function num1_1() {
    if (p1ran1 == " ") {
        p1ran1 = Math.floor(Math.random()*6 + 1);
        document.getElementById("position1_1").innerHTML = p1ran1;
        document.getElementById("position1_1").style.backgroundColor = "#2EC4B6";
        document.getElementById("position1_1").style.border = "#2EC4B6";
        
        tryCounter = tryCounter - 1;
        disablePlayer1();
        hideTurnP1();
        
            if (tryCounter == 0) {
                document.getElementById("winner").innerHTML = announceWinner();
            }
    }  
}

function num1_2() {
    if (p1ran2 == " ") {
        p1ran2 = Math.floor(Math.random()*6 + 1);
        document.getElementById("position1_2").innerHTML = p1ran2;
        document.getElementById("position1_2").style.backgroundColor = "#2EC4B6";
        document.getElementById("position1_2").style.border = "#2EC4B6";
        
        tryCounter = tryCounter - 1;
        disablePlayer1();
        hideTurnP1();
        
            if (tryCounter == 0) {
                document.getElementById("winner").innerHTML = announceWinner();
            }
    }
}

function num1_3() {
    if (p1ran3 == " ") {
        p1ran3 = Math.floor(Math.random()*6 + 1);
        document.getElementById("position1_3").innerHTML = p1ran3;
        document.getElementById("position1_3").style.backgroundColor = "#2EC4B6";
        document.getElementById("position1_3").style.border = "#2EC4B6";
        
        tryCounter = tryCounter - 1;
        disablePlayer1();
        hideTurnP1();
        
            if (tryCounter == 0) {
                document.getElementById("winner").innerHTML = announceWinner();
            }
    }
}

function num1_4() {
    if (p1ran4 == " ") {
        p1ran4 = Math.floor(Math.random()*6 + 1);
        document.getElementById("position1_4").innerHTML = p1ran4;
        document.getElementById("position1_4").style.backgroundColor = "#2EC4B6";
        document.getElementById("position1_4").style.border = "#2EC4B6";
        
        tryCounter = tryCounter - 1;
        disablePlayer1();
        hideTurnP1();
        
            if (tryCounter == 0) {
                document.getElementById("winner").innerHTML = announceWinner();
            }
    }
}


/* This series of functions serve as random number generators for each digit of Player 2's four-digit number. 

It also does the following: 
1. Keeps track of how many rolls out of 8 (since each player gets 4 rolls) are left in the game 
2. Makes the box slots disappear once the player clicks on them. 
3. Calls the disablePlayer2() function in order to disable Player 2's box slots and enable those of Player 1.
*/
function num2_1() {
    if (p2ran1 == " ") {
        p2ran1 = Math.floor(Math.random()*6 + 1);
        document.getElementById("position2_1").innerHTML = p2ran1;
        document.getElementById("position2_1").style.backgroundColor = "#2EC4B6";
        document.getElementById("position2_1").style.border = "#2EC4B6";
        
        tryCounter = tryCounter - 1;
        disablePlayer2();
        hideTurnP2();
        
            if (tryCounter == 0) {
                document.getElementById("winner").innerHTML = announceWinner();
                hideBoth();
            }
    }
}

function num2_2() {
    if (p2ran2 == " ") {
        p2ran2 = Math.floor(Math.random()*6 + 1);
        document.getElementById("position2_2").innerHTML = p2ran2;
        document.getElementById("position2_2").style.backgroundColor = "#2EC4B6";
        document.getElementById("position2_2").style.border = "#2EC4B6";
        
        tryCounter = tryCounter - 1;
        disablePlayer2();
        hideTurnP2();
        
            if (tryCounter == 0) {
                document.getElementById("winner").innerHTML = announceWinner();
                hideBoth();
            }
    } 
}

function num2_3() {
    if (p2ran3 == " ") {
        p2ran3 = Math.floor(Math.random()*6 + 1);
        document.getElementById("position2_3").innerHTML = p2ran3;
        document.getElementById("position2_3").style.backgroundColor = "#2EC4B6";
        document.getElementById("position2_3").style.border = "#2EC4B6";
        
        tryCounter = tryCounter - 1;
        disablePlayer2();
        hideTurnP2();
        
            if (tryCounter == 0) {
                document.getElementById("winner").innerHTML = announceWinner();
                hideBoth();
            }
    }
}

function num2_4() {
    if (p2ran4 == " ") {
        p2ran4 = Math.floor(Math.random()*6 + 1);
        document.getElementById("position2_4").innerHTML = p2ran4;
        document.getElementById("position2_4").style.backgroundColor = "#2EC4B6";
        document.getElementById("position2_4").style.border = "#2EC4B6";
        
        tryCounter = tryCounter - 1;
        disablePlayer2();
        hideTurnP2();
        
            if (tryCounter == 0) {
                document.getElementById("winner").innerHTML = announceWinner();
                hideBoth();
            }
    }
}

//Disables Player 1's box slots while enabling Player 2's box slots.
function disablePlayer1() {
    document.getElementById("position1_1").disabled= true;
    document.getElementById("position1_2").disabled= true;
    document.getElementById("position1_3").disabled= true;
    document.getElementById("position1_4").disabled= true;
    
    document.getElementById("position2_1").disabled= false;
    document.getElementById("position2_2").disabled= false;
    document.getElementById("position2_3").disabled= false;
    document.getElementById("position2_4").disabled= false;
}

//Disables Player 2's box slots while enabling Player 1's box slots.
function disablePlayer2() {
    document.getElementById("position2_1").disabled= true;
    document.getElementById("position2_2").disabled= true;
    document.getElementById("position2_3").disabled= true;
    document.getElementById("position2_4").disabled= true;
    
    document.getElementById("position1_1").disabled= false;
    document.getElementById("position1_2").disabled= false;
    document.getElementById("position1_3").disabled= false;
    document.getElementById("position1_4").disabled= false;
}

//Compiles Player 1 and Player 2's individual rolls to form their four-digit number scores.
function calculateScore() {
    player1Score = ((p1ran1 * 1000)+(p1ran2 * 100)+(p1ran3 * 10)+(p1ran4));
    
    player2Score = ((p2ran1 * 1000)+(p2ran2 * 100)+(p2ran3 * 10)+(p2ran4));
}

//Hides "It's Your Turn!" notification for Player 1 and makes Player 2's notification visible.
function hideTurnP1() {
    document.getElementById("player1Area").style.visibility = "hidden";
    document.getElementById("player2Area").style.visibility = "visible";
}

//Hides "It's Your Turn!" notification for Player 2 and makes Player 1's notification visible.
function hideTurnP2() {
    document.getElementById("player1Area").style.visibility = "visible";
    document.getElementById("player2Area").style.visibility = "hidden";
}

//Hides "It's Your Turn!" notification for both Player 1 and Player 2.
function hideBoth() {
    document.getElementById("player1Area").style.visibility = "hidden";
    document.getElementById("player2Area").style.visibility = "hidden";
}

//Announces which player has the highest/lowest number or whether it's a tie. Also makes the "Play Again?" and "Return to Home Page" buttons visible.
function announceWinner() {
    calculateScore();
    document.getElementById("playAgain").style.visibility = "visible";
    document.getElementById("backHome").style.visibility = "visible";
    if (localStorage.game == "Highest") {
        if (player1Score > player2Score) {
            return("The winner with the highest score is " + localStorage.personName1 + "!");
        } else if (player1Score == player2Score) {
            return ("It's a tie!");
        } else {
            return("The winner with the highest score is " + localStorage.personName2 + "!");
        }
    } else {
        if (player1Score < player2Score) {
            return("The winner with the lowest score is " + localStorage.personName1 + "!");
        } else if (player1Score == player2Score) {
            return ("It's a tie!");
        } else {
            return("The winner with the lowest score is " + localStorage.personName2 + "!");
        }
    }
}

//Redirects players back to "vcaballeassign3_1.html" in order to start a new game session.
function restartGame() {
   location.replace("vcaballeassign3_1.html"); 
}

//Redirects players back to the game's main page.
function returnHome() {
    location.replace("vcaballeassign3.html");
}