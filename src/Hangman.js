import React, {Component} from 'react';
import Victory from "./Victory";
import Defeat from "./Defeat";
import GuessForm from "./GuessForm";
import {observer} from "mobx-react";
import HangmanModel from "./HangmanModel";

const hangmanModel = new HangmanModel("powershop", 5);

class Hangman extends Component {
  render() {
    if (hangmanModel.isWon)
      return <Victory/>;
    else if (hangmanModel.isLost)
      return <Defeat/>;
    else
      return <GuessForm hangmanModel={hangmanModel}/>
  }
}

export default observer(Hangman);