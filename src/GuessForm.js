// GuessForm.js

import React, {Component} from 'react';

class GuessForm extends Component {

  onSubmitLetter(e) {
    e.preventDefault();
    this.props.updateGameState(this.input.value);
    this.input.value = "";
  }

  render() {
    const {guessesLeft, feedbackMessage, usedLetters, hint} = this.props;
    return (
      <div>
        <h1>Take a guess!</h1>
        <h4>{guessesLeft} guesses left</h4>
        <h2>{hint}</h2>
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

export default GuessForm;