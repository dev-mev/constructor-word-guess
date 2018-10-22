const inquirer = require("inquirer");
const Word = require("./word");

const words = ["Halloween", "spooky", "scary", "pumpkin", "candy", "costume"];
const randWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
const currentWord = new Word(randWord);
console.log(currentWord.toString());

function promptGuess() {
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
      currentWord.guess(answers.guess);
      console.log(currentWord.toString());
      if (currentWord.allLettersGuessed === false) {
        promptGuess();
      } else { console.log("You win!"); }
    });
}

promptGuess();
