window.addEventListener("load", initialize, false); //event listener so when the page loads the initialize function is run

function initialize() {
	var canvas = document.getElementById("shadowTextCanvas"); //get a reference to the canvas
	var context = canvas.getContext("2d"); //get the context of the canvas
	context.font = "40px sans-serif"; //make the font a bigger size
	context.shadowBlur = 6; //add a blur of 6px
	context.shadowOffsetX = 2; //add a shadow offset horizontally of 2 px
	context.shadowOffsetY = 5; //add a shadow offset vertically of 5 px
	context.shadowColor = "gray"; //set the shadow color to gray
	context.textAlign = "center"; //have the text be centered on the given coordinates below
	context.fillText("HTML5 Canvas", 250, 250); //fill the canvas with the text and start the (centered) positioning from the center of the canvas (it was made 500 x 500)
}