function random_letter(ltr) { /* New function called random_letter that takes one parameter, 
	ltr (or a letter)*/
	//Get a random letter between A and a passed-in letter
	var ltr = ltr || z // If no letter passed in, default to z
	return 

}

function letter_choice() { // New fuction called letter_choice that doesn't take any parameters// 
// Since letter_choice is a special case, give it its own list //
	var letter_choice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	var randomLtr = random_letter(z); // Use the function above to get a letter from a to z
	return [randomLtr]; // Return the list item the random letter function just picked and exit the function 

}

function get_answer() {
// Get random letter
	var letter_choice = [];
	var selector = 'input[letter="' + '[]"]'; // Build a css selector in passed letter
	var inputs = document.querySelectorAll (selector); // Get all the inputs that match our selector
	var answer;

	for (var i = 0; i <inputs.length; i++) { /* Begin a for loop that will run through the code. 
		i++ = add one to the counter which is "i" */
		answer = inputs [i].value; // Get the input with the index value of the counter
		if (answer !== '') { // If answer doesn't equal a blank
			choices.push(answer); // add it to the end of the list
		}
}
	return choices [random_letter(choices.length)]; /* Pick and return a random choice.length = number of answers the user provided */

var wins = 0;
var losses = 0;
var guesses left = 0;
var guesses so far = 0;



}