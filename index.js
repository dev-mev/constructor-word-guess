const inquirer = require("inquirer");
const Word = require("./word");

const words = ["Halloween", "spooky", "scary"];
const randWord = words[Math.floor(Math.random() * words.length)].toLowerCase();

const currentWord = new Word(randWord);
console.log(currentWord.letters);
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
    });
}

promptGuess();
