module.exports = {

	letterfunction: function Letter(letter) {
		this.value = letter;
		this.guessed = false;
		this.display = function() {
			if (this.guessed) {
				console.log(letter + " ");
			} else {
				console.log("_ ")
			}
		}
		this.guessLetter = function(userGuess) {
			if (userGuess === this.value) {
				console.log("Correct!")
				this.guessed = true;
			} else {
				console.log("Incorrect!")
			}
		}
	}
}



// var A = new Letter("a");

// console.log(A);

// A.display();
// A.guessLetter("g");
// A.guessLetter("a");
// A.display();
