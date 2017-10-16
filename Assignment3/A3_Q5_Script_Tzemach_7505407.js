function initialize() //function that should run when the page loads
{ 
	document.getElementById("startButton").addEventListener("click", startGame); //add an event listener to the "startButton"
	document.getElementById("resetButton").addEventListener("click", resetGame); //add an event listener to the "resetButton"
}

var tortoisePos = 1; //variable to keep the position of the tortoise (initialized to 1)
var harePos = 1; //variable to keep the position of the hare (initialized to 1)
var tortoiseWin = false; //variable to keep track of whether the tortoise won (or has a position >= 70)
var hareWin = false; //variable to keep track of whether the hare won (or has a position >= 70)

function startGame() //function to initiate and run the simulation
{ 
	var clock = 1; //variable to keep track of the clock (initialized to 1)
	var emptyTrack = new Array(70); //empty array of 70 elements
	var tortoiseMove; //variable to keep track of the move the tortoise should perform
	var hareMove; //variable to keep track of the move the hare should perform

	for(i = 0; i < emptyTrack.length; i++) { //loop through the entire empty track array
		emptyTrack[i] = "-"; //initialize all the elements of the array to a dash 
	}
	
	document.getElementById("raceText").innerHTML = "ON YOUR MARK, GET SET<br>BANG!!!<br>AND THEY'RE OFF!!!"; //set the "raceText" element to the starting message
	var content = "<tr><th>Clock</th><th>Track</th></tr>"; //create the table content string and set the header
	
	for(clock = 1; tortoiseWin == false && hareWin == false; clock++) { //loop through and increment the clock while no animal has won
		var track = emptyTrack.slice(0); //take a copy of the empty array track (not a reference)
		tortoiseMove = Math.floor(Math.random() * 10 + 1); //generate a random number for the tortoise's move (between 1 and 10)
		hareMove = Math.floor(Math.random() * 10 + 1); //generate a random number for the hare's move (between 1 and 10)
		changeTortoisePos(tortoiseMove); //call a function to move the tortoise position
		changeHarePos(hareMove); //call a function to move the hare position
		
		if(tortoiseWin || hareWin) { //check if any of the animals won
			checkWin(tortoiseWin, hareWin); //if one of the animals won (or both) call the checkWin function
		}
		else { //if no animal won
			if(tortoisePos == harePos) { //check if the position of both animals is the same
				track[tortoisePos] = "OUCH!!!"; //set the track element at the given position to "OUCH"
			}
			else { //if the position of the animals are not the same
				track[tortoisePos] = "T"; //set the track element for the tortoise to be T
				track[harePos] = "H"; //set the track element for the hare to be H
			}
			content += "<tr><td>"+clock+"</td><td>"+track.join(" ")+"</td></tr>"; //add a row to the table string that has the clock time and the new track
		}
	}
	document.getElementById("race").innerHTML = content; //input the table rows into the table "race"
	document.getElementById("startButton").disabled = true; //disable the start button
}

function changeTortoisePos(tMove) //function to change the position of the tortoise
{ 
	if(tMove >= 1 && tMove <= 5) { //if the random number is between 1 and 5 (inclusive)
		tortoisePos += 3; //increment the tortoise position by 3
	}
	else if(tMove == 6 || tMove == 7) { //if the random number is 6 or 7
		tortoisePos -= 6; //decrement the tortoise position by 6
	}
	else if(tMove >= 8 && tMove <= 10) { //if the random number is between 8 and 10 (inclusive)
		tortoisePos += 1; //increment the tortoise position by 1
	}
	if(tortoisePos <= 0) { //if the tortoise position is less than or equal to 0
		tortoisePos = 1; //set the tortoise position to 1
	}
	else if(tortoisePos >= 70) { //if the tortoise position is greater than or equal to 70
		tortoiseWin = true; //set the tortoise win flag to true
	}
}

function changeHarePos(hMove) //function to change the position of the hare
{ 
	if(hMove == 3 || hMove == 4) { //if the random number is 3 or 4
		harePos += 9; //increment the hare position by 9
	}
	else if(hMove == 5) { //if the random number is 5
		harePos -= 12; //decrement the hare position by 12
	}
	else if(hMove >= 6 && hMove <= 8) { //if the random number is between 6 and 8 (inclusive)
		harePos += 1; //increment the hare position by 1
	}
	else if(hMove == 9 || hMove == 10) { //if the random number is 9 or 10
		harePos -= 2; //decrement the hare position by 2
	}
	if(harePos <= 0) { //if the hare position is less than or equal to 0
		harePos = 1; //set the hare position to 1
	}
	else if(harePos >= 70) { //if the hare position is greater than or equal to 70
		hareWin = true; //set the hare win flag to true
	}
}

function checkWin(tWin, hWin) //checks to see who won and sets the message appropriately
{ 
	if(tWin) { //if the tortoise won
		if(hWin) { //and the hare won
			document.getElementById("winText").innerHTML = "It's a tie!"; //write that it's a tie
		}
		else { //if the hare didn't win but the tortoise won
			document.getElementById("winText").innerHTML = "Tortoise wins!!! Yay!!!"; //write that the tortoise won
		}
	}
	else if (hWin && !tWin) { //if the hare wins and the tortoise doesn't win
		document.getElementById("winText").innerHTML = "Hare wins. Yuck!"; //write that the hare won
	}
}

function resetGame() //function to reset the game
{
	document.getElementById("race").innerHTML = ""; //set the race table to empty
	document.getElementById("raceText").innerHTML = ""; //set the starting text to empty
	document.getElementById("winText").innerHTML = ""; //set the win text to empty
	tortoisePos = 1; //set the tortoise position to 1
	harePos = 1; //set the hare position to 1
	tortoiseWin = false; //set the tortoise win flag to false
	hareWin = false; //set the hare win flag to false
	document.getElementById("startButton").disabled = false; //re-enable the start button
}
window.addEventListener("load", initialize, false); //add an event listener to the window which executes the initialize function on page load