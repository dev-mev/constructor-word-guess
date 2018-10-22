const Letter = require("./letter");

const Word = function (word) {
  this.letters = [];
  for (const character of word.split("")) {
    this.letters.push(new Letter(character));
  }
};

Word.prototype.toString = function () {
  return this.letters.join(" ");
};

Word.prototype.guess = function (characterGuessed) {
  for (const letter of this.letters) {
    letter.checkLetter(characterGuessed);
  }
};

module.exports = Word;
