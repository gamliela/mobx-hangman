import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Hangman from "./Hangman";

const Greeting = ({name}) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
    <h1 className="App-title">Welcome to {name}</h1>
  </header>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greeting name={'Hangman'}/>
        <Hangman secretWord="powershop" numGuesses={5}/>
      </div>
    );
  }
}

export default App;
