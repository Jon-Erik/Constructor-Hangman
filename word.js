var letter = require("./letter.js")
var letterfunction = letter.letterfunction;

function Word (wordToGuess) {
	this.letterArray = wordToGuess.split("").forEach(function(index) {
		console.log("working");
		console.log(index.value);
		new letterfunction(index);
	})
	// .forEach(function (index) {
	// var letter = new letterfunction(index);	
	// 	})
	this.wordString = function() {

	}
}

// var letter = require("./letter.js")

// console.log(letter.letterfunction)

// var letterfunction = letter.letterfunction;

// var B = new letterfunction("B");
// console.log(B)
// B.display();

// var letterArray = "thisword".split("");
// console.log(letterArray)

var heaven = new Word("heaven");

console.log(heaven.letterArray);

// this.letterArray = function() {
// 		var letter = require("./letter.js")
// 		var letterfunction = letter.letterfunction;
// 		var letterArray = wordToGuess.split("");
// 		for (i = 0; i < letterArray.length; i++) {
// 			var letter = new letterfunction([i]);
// 		}
// 	}