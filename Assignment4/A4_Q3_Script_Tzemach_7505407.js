window.addEventListener("load", initialize, false); //add an event listener in order to execute the initialize function when the page loads

function initialize() { //Initialize function that adds all the event listeners for different elements
	document.addEventListener("click", processClick, false);
	document.getElementById("bodyelement").addEventListener("click", processClick, false);
	document.getElementById("header").addEventListener("click", processClick, false);
	document.getElementById("loremipsum").addEventListener("click", processClick, false);
	document.getElementById("button1").addEventListener("click", processClick, false);
	document.getElementById("button2").addEventListener("click", processClick, false);
	document.getElementById("table1").addEventListener("click", processClick, false);
	document.getElementById("tablerow").addEventListener("click", processClick, false);
	document.getElementById("tablerow2col1").addEventListener("click", processClick, false);
	document.getElementById("tablerow2col2").addEventListener("click", processClick, false);
	document.getElementById("tablerow2col3").addEventListener("click", processClick, false);
	document.getElementById("orderedlist").addEventListener("click", processClick, false);
	document.getElementById("listitem1").addEventListener("click", processClick, false);
	document.getElementById("yahooanchor").addEventListener("click", processClick, false);
}

function processClick(e) { //function called when a click is made
	if(e.shiftKey) { //if shift was clicked while the event occurred
		if(this.id != null) {
			alert("Event is a " + e.type + " on " + this.id); //alert the user about the id of the element
		} else {
			alert("Event is a " + e.type + " on the root html element");
		}
	}
	if(e.ctrlKey) { //if the ctrl key was clicked while the event occurred
		alert("Element name is " + e.target.tagName.toLowerCase()); //alert the user about the element tag name
	}
	e.preventDefault(); //stop the default action of the element
	e.cancelBubble = true; //stop the event from bubbling up
}