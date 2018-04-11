//constructor which takes in a letter as an argument and gives it certain key values
function Letter(letter) {
	this.value = letter;
	this.guessed = false;
	if (letter === " ") {
		this.guessed = true;
	}
	//The above code allows for random phrases with spaces to be used in the game.
	//Spaces are automatically set to true so that they display as blanks always
	//and not as underscores.
	this.display = function() {
		if (this.guessed) {
			return this.value + " ";
		} else {
			return "_ ";
		}
	}
	this.guessLetter = function(userGuess) {
		if (userGuess.toUpperCase() === this.value.toUpperCase()) {
			//console.log("Correct!")
			this.guessed = true;
		} else {
			//console.log("Incorrect!")
		}
	}
}

module.exports = Letter;