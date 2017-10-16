window.addEventListener("load", initialize, false); //add an event listener in order to execute the initialize function when the page loads
var tilePos = new Array(17); //create an array of 17 elements (since we want to start at 1 instead of 0)
var emptyTile; //create a variable that holds which tile should be the empty one
var content; //variable that holds the content of the gameBoard

function initialize() {
	newGame(); //call the function to start a new game
	document.getElementById("playAgainButton").addEventListener("click", newGame, false); //add event listener for the newgame button
	document.getElementById("cheatGameButton").addEventListener("click", solvePuzzle, false); //add event listener for the solve puzzle button
}

function findRandomNum() { //function to find a random number from 1 to 15 that hasn't been used yet
	var num = Math.floor(Math.random() * 15 + 1); //generates the random number
	while(tilePos[num] != 0) { //while the random number has been used
		num = Math.floor(Math.random() * 15 + 1); //generate a new random number
	}
	return num;
}

function processMove(e) { //function to process a move event
	var cellID = parseInt(this.id); //get the cell id
	/*
		if loop to check if the empty cell is 1 away (above, below, left or right) from the clicked cell on the board.
		
		Left = cellID - 1, the cellID % 4 != 1 ensures that if the empty value is in column 4, that clicking a cell in column 1 doesn't move the number
		Right = cellID + 1, the cellID % 4 != 0 ensures that if the empty value is in column 1, that clicking a cell in column 4 doesn't move the number
		Above = cellID - 4, because the cell above would be 4 indices less than the current index
		Below = cellID + 4, because the cell below would be 4 indices greater than the current index
	*/
	if(cellID - 1 == emptyTile && cellID % 4 != 1 || cellID + 1 == emptyTile && cellID % 4 != 0 || cellID - 4 == emptyTile || cellID + 4 == emptyTile) {
		tilePos[emptyTile] = this.innerHTML; //changes the tiles position in the array
		tilePos[this.id] = 0; //sets the new blank tile to 0
		document.getElementById(emptyTile).innerHTML = this.innerHTML; //changes the tiles text on the board
		emptyTile = this.id; //changes the empty tile variables to the new empty cell id
		this.innerHTML = ""; //changes the value of the clicked tile to an empty string (visual change on board)
		checkWin(); //call the function to check if the game has been won
	} else {
		if(this.id != emptyTile) { //if you click on a tile that is not next to the empty tile and is not the empty tile itself
			alert("Tile " + this.innerHTML + " is not next to the empty tile!"); //alert the user
		} else { //if it is the empty tile
			alert("You can't move the empty tile!"); //alert the user
		}
	}
}

function checkWin() { //function to check if the game has been won
	var gameWon = true; //create a flag that is set to true for the game won
	for(var i = 1; i <= 15; i++) { //loop through the 15 array elements
		if(tilePos[i] != i) { //if the element at position i is not i
			gameWon = false; //then the game has not been won
		}
	}
	if(gameWon) { //if the game has been won
		document.getElementById("gameWon").innerHTML = "Congratulations, you've won the game!"; //print out the congratulations message
		document.getElementById("playAgainButton").disabled = false; //enable the play again button
		for(var i = 1; i < tilePos.length; i++) { //loop through all the table cells
			document.getElementById(i).removeEventListener("click", processMove, false); //remove all event listeners 
		}
	}
}			

function solvePuzzle() { //function to cheat and solve the game (since there are many combinations which are not possible, and this is faster for testing)
	content = ""; //set the content string to empty
	for(var row = 1; row <= 4; row++) { //for each row
		content += "<tr>"; //create the row
		for(var col = 1; col <= 4; col++) { //for each column
			var id = ((row-1)*4) + col; //calculate the cell id
			if(id != 16) { //if the id is not 16
				tilePos[id] = id; //then set the array element at position id to id
				content += "<td id = \"" + id + "\" height=\"80\" width=\"80\">"+id+"</td>"; //create the cell with the value being it's id
			} else { //if the id is 16
				content += "<td id = \"" + 16 + "\" height=\"80\" width=\"80\"></td>"; //create the cell with an empty value and id 16
			}
		}
	}
	document.getElementById("gameBoard").innerHTML = content; //set the gameboard content to the content string
	emptyTile = 16; //set the emptyTile to 16, not needed but keeps it accurate
	checkWin(); //check if the game has been won (it should be)
	document.getElementById("cheatGameButton").disabled = true; //disable the solve puzzle button
}

function newGame() {
	for(i = 0; i < tilePos.length; i++) { //loop through the entire tile position array
		tilePos[i] = "0"; //initialize all the elements of the array to 0 
	}
	emptyTile = Math.floor(Math.random() * 15 + 1); //generate a tile that is going to stay empty
	content = ""; //create an empty content string
	for(var row = 1; row <= 4; row++) { //for each row
		content += "<tr>"; //create the row
		for(var col = 1; col <= 4; col++) { //for each column
			var id = ((row-1)*4) + col; //get the appropriate cell id
			var randomNum = ""; //create an empty random number
			if(id != emptyTile) { //as long as the cell is not the randomly chosen empty one
				randomNum = findRandomNum(); //call the find random number function
				tilePos[randomNum] = id; //set the position in the array to the cell id
			}
			content += "<td id = \"" + id + "\" height=\"80\" width=\"80\">"+randomNum+"</td>"; //create data for the row
		}
		content += "</tr>"; //end the row
	}
	document.getElementById("gameBoard").innerHTML = content; //set the board to the content (table)
	document.getElementById("playAgainButton").disabled = true; //disable the play again button
	document.getElementById("cheatGameButton").disabled = false; //enable the solve puzzle button
	for(var i = 1; i < tilePos.length; i++) { //loop through all the table cells
		document.getElementById(i).addEventListener("click", processMove, false); //add an event listener to the "cell"
	}
	document.getElementById("gameWon").innerHTML = ""; //clear the game won text
}