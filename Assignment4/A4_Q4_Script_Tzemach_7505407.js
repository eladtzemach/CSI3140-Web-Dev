window.addEventListener("load", initialize, false); //add an event listener in order to execute the initialize function when the page loads
var pressed = false; //flag to determine if the mouse is pressed
var img; //variable to hold the img element
function initialize() { //Initialize function that adds all the event listeners for mousedown, mouseup, and mousemove
	img = document.getElementById("theImage"); //set the img variable to the img element with id "theImage"
	img.addEventListener("mousedown", processMouseDown, false); //add an event listener to the image when the mouse is pressed 
	img.addEventListener("mouseup", processMouseUp, false); //add an event listener to the image when the mouse is released
	document.addEventListener("mousemove", processMouseMove, false); //add an event listener to the document for when the mouse is moving
}

function processMouseDown(e) { //function to process the mouse pressed event
	pressed = true; //set the pressed flag to true
}

function processMouseUp(e) { //function to process the mouse released event
	pressed = false; //set the pressed flag to false
}

function processMouseMove(e) { //function to process the mouse moved event
	if(pressed) { //check if the mouse was pressed
		moveImage(e.clientX, e.clientY); //if it was then call the moveImage function with the current X/Y coordinates
	}
}

function moveImage(x, y) { //function to move the image
	img.style.left = x  + "px"; //set the img left property to the x coordinate
	img.style.top = y + "px"; //set the img top property to the y coordinate
}