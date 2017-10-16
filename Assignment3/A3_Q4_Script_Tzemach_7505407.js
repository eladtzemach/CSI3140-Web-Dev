var total = 0;

function initialize() //function that runs when the page loads
{
	document.getElementById("allNumbers").addEventListener("click", function() { findPrimes(true); }); //adds an event listener to the button with id "allNumbers"
	document.getElementById("primeNumbers").addEventListener("click", function() { findPrimes(false); }); //adds an event listener to the button with id "primeNumbers"
}

function findPrimes(allNumbers) //function to find the number of primes

{
	
	total = 0;
	var arr = []; //create an empty array

	for(i = 0; i < 1000; i++) { //loop 1000 times
		arr.push(1); //add the element 1 to the array
	}

	arr[0] = 0; //initialize the first element to 0 (0 is not prime)
	arr[1] = 0; //initialize the second element to 0 (1 is not prime)

	for(i = 2; i < arr.length; i++) { //starting with index 2, loop through the entire array
		if(arr[i] == 1) { //if the current element is 1
			for(j = i + 1; j < arr.length; j++) { //loop through all the elements with an index greater than the current index i
				if(j % i == 0) { //if the second index is a multiple of the first index
					arr[j] = 0; //set the element of the second index to 0
				}
			}
		}
	}

	var content = "<tr><th>Number</th><th>Prime?</th></tr>"; //create the header for the table in a string

	for(i = 1; i < arr.length; i++) { //loop through the entire array stating with index 1
		if(arr[i] == 1) { //if the element at index i is 1 
			content += "<tr><td>"+i+"</td><td>True</td></tr>"; //add to the table string a new row with the index and the word True since it is a prime
			total++;
		} 
		else if (arr[i] != 1 && allNumbers) { //if the element at index i is not 1 and table of all numbers is true
			content += "<tr><td>"+i+"</td><td>False</td></tr>"; //add to the table string a new row with the index and the word False since it is not a prime
		}
	}
	document.getElementById("primeTable").innerHTML = "<br>Total number of Prime Numbers: " + total + "<br>" + content; //add the table string into the primeTable element
}

window.addEventListener("load", initialize, false); //when the page loads execute the findPrimes function