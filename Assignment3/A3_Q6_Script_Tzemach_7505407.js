window.addEventListener("load", initialize, false); //add an event listener in order to execute the initialize function when the page loads

function initialize() //function that gets run when the page loads
{
	document.getElementById("toPigLatin").addEventListener("click", printLatinWord); //add an event listener to the button with id "toPigLatin"
	document.getElementById("toEnglish").addEventListener("click", printEnglishWord); //add an event listener to the button with id "toEnglish"
	document.getElementById("clearHistory").addEventListener("click", clearHistory); //add and event listener to the button with id "clearHistory"
}

function printLatinWord() //function that translates to Pig Latin
{
	var englishText = document.getElementById("textToTranslate").value.trim(); //retrieves the text the user entered 
	var words = englishText.toLowerCase().split(" "); //converts the string to lower case, splits the string on spaces, and puts it into an array words
	for(i = 0; i < words.length; i++) { //loops through the entire array
		words[i] = words[i].slice(1) + words[i].slice(0,1) + "ay"; //takes each word, uses a slice (or substr) from the second element (pos 1) to the end and concatenates it with a slice of the first element (pos 0), followed by "ay"
	}
	addToPastConversionPigLatin(words); // calls the function to add to the old translations (Pig Latin)
}

function addToPastConversionPigLatin(arr) //function that adds the past translated text to the bottom textarea (Pig Latin)
{
	var oldConvertedText = document.getElementById("pastConvertedPigLatin").value; //gets the text currently in the textarea
	oldConvertedText += arr.join(" ") + "\n"; //concatenate the old converted text with the new string and a new line
	document.getElementById("pastConvertedPigLatin").value = oldConvertedText; //place the value back in the textarea
}

function printEnglishWord() //function that translates to English
{
	var pigLatinText = document.getElementById("textToTranslate").value.trim(); //retrieves the text the user entered
	var words = pigLatinText.toLowerCase().split(" "); //converts the string to lower case, splits the string on spaces and puts it into an array words
	var isLatin = true; //flag to make sure the text is pig latin
	for(i = 0; i < words.length && isLatin == true; i++) { //loops through the array until the end or until a word is found that is not Pig Latin
		if(words[i].slice(-2) != "ay") { //if the last 2 characters of a word are not "ay"
			isLatin = false; //set the flag to false (i.e., the word is not Pig Latin)
		}
		else { //if the word is Pig Latin
			words[i] = words[i].slice(-3, -2) + words[i].slice(0, words[i].length-3); //take the 3rd last character to the second last (non inclusive) concatenated with the characters up until the third last 
		}
	}
	if(!isLatin) { //if there was a word that was not Pig Latin
		window.alert("That's not Pig Latin!"); //alert the user 
	}
	else { //if all words were PigLatin
		addToPastConversionEnglish(words); // call the function to add to the old translations (English)
	}
}

function addToPastConversionEnglish(arr) //function that adds the past translated text to the bottom textarea (English)
{
	var oldConvertedText = document.getElementById("pastConvertedEnglish").value; //gets the text currently in the textarea
	oldConvertedText += arr.join(" ") + "\n"; //concatenate the old converted text with the new string and a new line
	document.getElementById("pastConvertedEnglish").value = oldConvertedText; //place the value back in the textarea
}

function clearHistory() //function to clear the translation history
{
	document.getElementById("pastConvertedPigLatin").value = ""; //clears the Pig Latin translation history
	document.getElementById("pastConvertedEnglish").value = ""; //clears the English translation history
}