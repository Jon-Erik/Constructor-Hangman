function Letter(letter) {
	this.value = letter;
	this.guessed = false;
	this.display = function() {
		if (this.guessed) {
			return letter + " ";
		} else {
			return "_ ";
		}
	}
	this.guessLetter = function(userGuess) {
		if (userGuess === this.value) {
			//console.log("Correct!")
			this.guessed = true;
		} else {
			//console.log("Incorrect!")
		}
	}
}

module.exports = Letter;