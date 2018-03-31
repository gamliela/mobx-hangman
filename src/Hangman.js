import React, {Component} from 'react';

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

  onSubmitLetter(e) {
    e.preventDefault();
    this.updateGameState(this.input.value);
    this.input.value = "";
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

  render() {
    const {guessesLeft, feedbackMessage, usedLetters} = this.state;
    return (
      <div>
        <h1>Take a guess!</h1>
        <h4>{guessesLeft} guesses left</h4>
        <h2>{this.hint}</h2>
        <form onSubmit={this.onSubmitLetter.bind(this)}>
          <label>
            Please enter one letter:
            <input type="text" ref={input => this.input = input}/>
            <input type="submit" value="guess!"/>
          </label>
        </form>
        <h2>{feedbackMessage}</h2>
        <p>Used letters: [{usedLetters.join()}]</p>
      </div>
    )
  }
}

export default Hangman;