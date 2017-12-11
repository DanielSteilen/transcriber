import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Doc from './Document';
import Keyboard from'./Keyboard';




class App extends Component {
  constructor(props) {
      super(props);
      this.state = {text: ''};
  }

  handleStandard(i) {
      const newText = this.state.text + i;
      this.setState({text: newText})
  }

  handleClear() {
    console.log("App: hello");

    this.setState({text: ''});
  }

  handleBackspace() {
    this.setState({
      text: this.state.text.slice(0,this.state.text.length-1)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Transcriber</h1>
        </header>
        <Doc/>
        <p className="App-display">
          {this.state.text}
        </p>
        <Keyboard
          onStandardClick={(letter) => this.handleStandard(letter)}
          onClearClick={() => this.handleClear()}
          onBackspaceClick={() => this.handleBackspace()}
        />
      </div>
    );
  }
}

export default App;
//<img src={logo} className="App-logo" alt="logo" />
