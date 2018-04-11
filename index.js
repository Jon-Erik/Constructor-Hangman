var Word = require("./word.js");

var inquirer = require("inquirer");

var randomWords = ["basketball", "fresco", "intergalactic", "phenomenology", "interpersonal communication",
				   "metabolic rate", "Disney", "speaker", "kleenex", "metronome", "glasses", "Word on Fire",
				   "life on the edge", "Henry Cardinal Newman", "ready to go"];

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
			    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var guessesRemaining = 10;
var displayedWord;
var userGuess;
var chosenWord;
var guessedLetters = [];

//This function chooses a random word from the randomWords array, calls the Word 
//constructor on the chosen word, and calls the returnString function on this word.
function setUpWord() {
	var randomWordsIndex = Math.floor(Math.random() * randomWords.length);
	chosenWord = randomWords[randomWordsIndex];

	displayedWord = new Word(chosenWord);

	displayedWord.returnString();
}

//A function which tells the user on the CLI whether their guess was correct and 
//keeps track of the user's remaining guesses. This function does not actually change
//the boolean of whether the letter has been guessed or not; this is decided by
//the guessLetter function in the Letter constructor
function checkGuess() {
	for (i = 0; i < displayedWord.letterArray.length; i++) {
		if (displayedWord.letterArray[i].value.toUpperCase() === userGuess.toUpperCase()) {
			console.log("\nCorrect!\n");
			return;
		}		
	}
	guessesRemaining--;
	console.log("\nIncorrect! You have " + guessesRemaining + " guesses remaining!\n");
}

//A function which checks whether there are any more letters to guess in a word or 
//phrase. If the number of letters guessed as true is equal to the length of the word,
//the user wins and is given a new word to start guessing.
function checkWin() {
	var trueletters = 0;
	for (i = 0; i < displayedWord.letterArray.length; i++) {
		if (displayedWord.letterArray[i].guessed === true) {
			trueletters++;
			if (trueletters === displayedWord.letterArray.length) {
				console.log("You win! The word or phrase was '" + chosenWord + "'!\n" +
					"\nStart guessing a new word below!\n");
				guessedLetters = [];
				setUpWord();
			}
		}
	}
}

//A function which determines game play using the inquirer node module
function playGame() {
	inquirer.prompt([
			{
				type: "input",
				message: "Guess a letter!",
				name: "userGuess",

			}
		]).then(function(answer) {
			
			userGuess = answer.userGuess;

			if (guessedLetters.includes(userGuess)) {
				console.log("\nYou already guessed that letter.\n");
				displayedWord.returnString();
				playGame();

			} else {
				if (alphabet.includes(userGuess.toUpperCase())) {
					guessedLetters.push(userGuess);
					displayedWord.guessLetter(userGuess);
					checkGuess();
					displayedWord.returnString();
					checkWin();

					if (guessesRemaining > 0) {
						playGame();
					} else {
						console.log("Game over! You ran out of guesses!\n");
					}

				} else {
					console.log("\nPlease enter a valid letter.\n");
					displayedWord.returnString();
					playGame();
				}
			}
		})
}

setUpWord();

playGame();