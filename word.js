var Letter = require("./letter.js");

//A constructor which requires the letter constructor values and functions to
//take in a whole word or phrase
function Word(randomWord) {
	var randomWordArray = [];
	var randomWordObjects = randomWord.split("").forEach(function(currentValue) {
		var newLetter = new Letter(currentValue);
		randomWordArray.push(newLetter);
	})
	//The above code creates an empty array, creates letter objects (with letter
	//constructor) on each letter in the word, and pushes each letter object to 
	//the empty array

	this.letterArray = randomWordArray;

	this.returnString = function () {
		var displayString = "";
		for (i = 0; i < this.letterArray.length; i++) {
			var displayResult = this.letterArray[i].display();
			displayString = displayString + displayResult;
		}
		//The above code creates an empty string, calls the display function on each
		//letter of the word, and adds it to the empty string to display on the console
		console.log(displayString + "\n");
		//return displayString + "\n";
	}

	this.guessLetter = function(character) {
		for (i = 0; i < this.letterArray.length; i++) {
			this.letterArray[i].guessLetter(character);
		}
	}
}

module.exports = Word;