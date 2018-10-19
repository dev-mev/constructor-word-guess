const Letter = function () {
  this.character = "";
  this.guessed = false;
};

Letter.prototype.toString = function () {
  // TODO: display letter, if guessed, or underscore
};

Letter.prototype.displayLetters = function (letter) {
  // TODO:  takes a character as an argument and checks it against the underlying
  // character, updating the stored boolean value to true if it was guessed correctly
};
