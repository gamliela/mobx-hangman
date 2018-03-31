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
  constructor(props) {
    super(props);
    this.state = {
      enabled: true
    };
  }

  onUpdate = (event) => this.setState({enabled: event.target.checked});

  render() {
    return (
      <div className="App">
        <Greeting name={'Hangman'}/>
        <input type="checkbox" checked={this.state.enabled} onChange={this.onUpdate}/>Enabled
        {this.state.enabled && <Hangman secretWord="powershop" numGuesses={5}/>}
      </div>
    );
  }
}

export default App;
