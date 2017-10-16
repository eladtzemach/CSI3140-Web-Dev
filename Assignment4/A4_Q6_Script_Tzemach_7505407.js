window.addEventListener("load", initialize, false); //event listener so when the page loads the initialize function is run

function initialize() {
	var canvas = document.getElementById("gradientShapeCanvas"); //get a reference to the canvas
	var context = canvas.getContext("2d"); //get the context of the canvas
	var gradient = context.createLinearGradient(0, 50, 0, 250); //create a linear gradient
	context.beginPath(); //begin drawing the shape/path
	context.moveTo(50, 50); //move the origin to 50, 50
	context.lineTo(400, 200); //move the line
	context.lineTo(200, 250); //move the line
	context.lineTo(50, 250); //move the line
	context.closePath(); //close the path/shape
	context.lineWidth = 8; //set the line width to 8px
	context.lineJoin = "round"; //make the joins round
	context.stroke(); //actually draw the shape/path
	gradient.addColorStop("0", "green"); //set the starting gradient color to green
	gradient.addColorStop("0.75", "blue"); //set the middle gradient color to blue
	gradient.addColorStop("0.85", "violet"); //set the end gradient color to violet
	context.fillStyle = gradient; //set the fill style to the gradient
	context.fill(); //actually add the fill style
}