import React, {Component} from 'react';
import Victory from "./Victory";
import Defeat from "./Defeat";
import GuessForm from "./GuessForm";
import HangmanModel from "./HangmanModel";
import {observer} from "mobx-react";

class Hangman extends Component {
  hangmanModel = new HangmanModel(this.props.secretWord, this.props.numGuesses);

  render() {
    if (this.hangmanModel.isWon)
      return <Victory/>;
    else if (this.hangmanModel.isLost)
      return <Defeat/>;
    else
      return <GuessForm hangmanModel={this.hangmanModel}/>
  }
}

export default observer(Hangman);