const Letter = function (character) {
  this.character = character;
  this.correctGuess = false;
};

Letter.prototype.toString = function () {
  if (this.correctGuess) {
    return this.character;
  }
  return "_";
};

Letter.prototype.checkLetter = function (checkGuess) {
  if (this.character === checkGuess) {
    this.correctGuess = true;
  }
};

module.exports = Letter;
