// Hangman.js

import React, {Component} from 'react';
import Victory from "./Victory";
import Defeat from "./Defeat";
import GuessForm from "./GuessForm";

class Hangman extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secretLetters: this.props.secretWord.split(""),
      guessesLeft: this.props.numGuesses,
      usedLetters: [],
      feedbackMessage: ""
    }
  }

  get hint() {
    const {secretLetters, usedLetters} = this.state;
    return secretLetters.map(letter => usedLetters.includes(letter) ? letter : "*");
  }

  updateGameState(letter) {
    this.updateFeedbackMessage(letter);
    this.updateGuessesLeft(letter);
    this.updateUsedLetters(letter);
  }

  updateUsedLetters(letter) {
    if (!this.isLetterUsed(letter))
      this.setState({usedLetters: this.state.usedLetters.concat(letter)});
  }

  updateFeedbackMessage(letter) {
    if (this.isLetterUsed(letter))
      this.setState({feedbackMessage: "Letter is already used!"});
    else if (this.isSecretIncludes(letter))
      this.setState({feedbackMessage: "Correct guess!"});
    else
      this.setState({feedbackMessage: "Wrong!"});
  }

  updateGuessesLeft(letter) {
    if (!this.isLetterUsed(letter) && !this.isSecretIncludes(letter))
      this.setState({guessesLeft: this.state.guessesLeft - 1});
  }

  isLetterUsed(letter) {
    return this.state.usedLetters.includes(letter);
  }

  isSecretIncludes(letter) {
    return this.state.secretLetters.includes(letter);
  }

  get isWon() {
    return this.state.secretLetters.every(this.isLetterUsed.bind(this));
  }

  get isLost() {
    return this.state.guessesLeft <= 0;
  }

  render() {
    if (this.isWon)
      return <Victory/>;
    else if (this.isLost)
      return <Defeat/>;
    else
      return <GuessForm guessesLeft={this.state.guessesLeft} usedLetters={this.state.usedLetters}
                        feedbackMessage={this.state.feedbackMessage} updateGameState={this.updateGameState.bind(this)}
                        hint={this.hint}/>
  }
}

export default Hangman;