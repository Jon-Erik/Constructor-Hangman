var Word = require("./word.js");

var inquirer = require("inquirer");

var randomWords = ["basketball", "fresco", "intergalactic", "phenomenology", "interpersonal",
				   "metabolic", "disney", "speaker", "kleenex", "metronome", "glasses"];

//var randomWords = ["life on the edge"];

var guessesRemaining = 10;
var displayedWord;
var userGuess;
var chosenWord;

function setUpWord() {
	var randomWordsIndex = Math.floor(Math.random() * randomWords.length);
	chosenWord = randomWords[randomWordsIndex];

	displayedWord = new Word(chosenWord);

	displayedWord.returnString();
}

function checkGuess() {
	for (i = 0; i < displayedWord.letterArray.length; i++) {
		if (displayedWord.letterArray[i].value === userGuess) {
			console.log("\nCorrect!\n");
			return;
		}		
	}
	guessesRemaining--;
	console.log("\nIncorrect! You have " + guessesRemaining + " guesses remaining!");
}

function checkWin() {
	var trueletters = 0;
	for (i = 0; i < displayedWord.letterArray.length; i++) {
		if (displayedWord.letterArray[i].guessed === true) {
			trueletters++;
			if (trueletters === displayedWord.letterArray.length) {
				console.log("You win! The word was '" + chosenWord + "'!\n" +
					"\nStart guessing a new word below!");
				setUpWord();
			}
		}
	}
}

function playGame() {
	inquirer.prompt([
			{
				type: "input",
				message: "Guess a letter!",
				name: "userGuess",

			}
		]).then(function(answer) {
			
			userGuess = answer.userGuess;

			displayedWord.guessLetter(answer.userGuess);

			checkGuess();

			displayedWord.returnString();

			checkWin();

			if (guessesRemaining > 0) {
				playGame();
			} else {
				console.log("Game over! You ran out of guesses!");
			}
		})
}

setUpWord();

playGame();