const inquirer = require("inquirer");
const Word = require("./word");

const words = ["class", "function", "operand", "truthy", "falsy", "scope", "syntax", "parameter", "argument", "modulo"];
let currentWord;
let guessesRemaining;

function startGame() {
  guessesRemaining = 10;
  currentWord = new Word(words[Math.floor(Math.random() * words.length)].toLowerCase());
  promptGuess();
}

function promptGuess() {
  console.log("\nGuesses remaining: " + guessesRemaining);
  console.log(currentWord.toString());
  inquirer
    .prompt([
      {
        name: "guess",
        message: "Guess letter: ",
        validate: (value) => {
          if (value.length === 1) {
            return true;
          }
          return false;
        }
      }
    ]).then(function (answers) {
      if (guessesRemaining > 1) {
        if (currentWord.guess(answers.guess.toLowerCase()) === false) {
          console.log("There is no " + answers.guess);
          guessesRemaining--;
        }
        if (currentWord.allLettersGuessed === false) {
          promptGuess();
        } else {
          console.log("\n" + currentWord);
          console.log("\nYou win! Let's play again!");
          startGame();
        }
      } else { console.log("You are out of guesses."); }
    });
}

startGame();
