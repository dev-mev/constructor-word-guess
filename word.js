const Letter = require("./letter");

const Word = function (word) {
  this.letters = [];
  for (const character of word.split("")) {
    this.letters.push(new Letter(character));
  }
  this.allLettersGuessed = false;
};

Word.prototype.toString = function () {
  return this.letters.join(" ");
};

Word.prototype.guess = function (characterGuessed) {
  let wasLetterCorrect = false;
  for (const letter of this.letters) {
    letter.checkLetter(characterGuessed);
    if (letter.correctGuess === true && letter.character === characterGuessed) {
      wasLetterCorrect = true;
    }
  }

  if (!this.toString().includes("_")) {
    this.allLettersGuessed = true;
  }

  return wasLetterCorrect;
};

module.exports = Word;
