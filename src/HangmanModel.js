import {computed, decorate, extendObservable} from "mobx";

class HangmanModel {
  constructor(secretWord, numGuesses) {
    extendObservable(this, {
      secretLetters: secretWord.split(""),
      guessesLeft: numGuesses,
      usedLetters: [],
      feedbackMessage: "",
      totalGuesses: 0
    });
  }

  get hint() {
    const {secretLetters, usedLetters} = this;
    return secretLetters.map(letter => usedLetters.includes(letter) ? letter : "*");
  }

  updateGameState(letter) {
    this.totalGuesses++;
    this.updateFeedbackMessage(letter);
    this.updateGuessesLeft(letter);
    this.updateUsedLetters(letter);
  }

  updateUsedLetters(letter) {
    if (!this.isLetterUsed(letter))
      this.usedLetters = this.usedLetters.concat(letter);
  }

  updateFeedbackMessage(letter) {
    if (this.isLetterUsed(letter))
      this.feedbackMessage = "Letter is already used!";
    else if (this.isSecretIncludes(letter))
      this.feedbackMessage = "Correct guess!";
    else
      this.feedbackMessage = "Wrong!";
  }

  updateGuessesLeft(letter) {
    if (!this.isLetterUsed(letter) && !this.isSecretIncludes(letter))
      this.guessesLeft = this.guessesLeft - 1;
  }

  isLetterUsed(letter) {
    return this.usedLetters.includes(letter);
  }

  isSecretIncludes(letter) {
    return this.secretLetters.includes(letter);
  }

  get isWon() {
    return this.secretLetters.every(this.isLetterUsed.bind(this));
  }

  get isLost() {
    return this.guessesLeft <= 0;
  }
}

export default HangmanModel;
