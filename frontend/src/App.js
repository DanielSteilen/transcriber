import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Doc from './Document';


function Key(props) {
  //const img = "./images/kurrent/" + props.value + "_lower.jpg"; //why doesn't this work?
  return (
    <button className="App-square" onClick={props.onClick}>
    <img
      className="App-key-img"
      alt={props.value}
      src={require("./images/kurrent/" + props.value + "_lower.jpg")}
    />
    </button>
  );
}

function SpecialKey(props) {
  return (
    <button className="App-square" onClick={props.onClick}>
    {props.value}
    </button>
  )
}

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {text: ''};
  }

  handleClick(i) {
      const newText = this.state.text + i;
      this.setState({text: newText})
  }

  clear() {
    this.setState({text: ''});
  }

  backspace() {
    this.setState({
      text: this.state.text.slice(0,this.state.text.length-1)
    });
  }

  renderKey(i) {
    return (
      <Key className="square"
        value={i}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  renderClearKey(i) {
    return (
      <SpecialKey className="square"
        value={i}
        onClick={() => this.clear()}
      />
    );
  }

  renderBackspaceKey(i) {
    return (
      <SpecialKey className="square"
        value={i}
        onClick={() => this.backspace()}
      />
    );
  }

  renderSpaceKey(i) {
    return (
      <SpecialKey className="square"
        value={i}
        onClick={() => this.handleClick(' ')}
      />
    );
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
        <div className="App-board-row">
        {this.renderKey('a')}
        {this.renderKey('b')}
        {this.renderKey('c')}
        {this.renderKey('d')}
        {this.renderKey('e')}
        {this.renderKey('f')}
        </div>
        <div className="App-board-row">
        {this.renderKey('g')}
        {this.renderKey('h')}
        {this.renderKey('i')}
        {this.renderKey('j')}
        {this.renderKey('k')}
        {this.renderKey('l')}
        </div>
        <div className="App-board-row">
        {this.renderKey('m')}
        {this.renderKey('n')}
        {this.renderKey('o')}
        {this.renderKey('p')}
        {this.renderKey('q')}
        {this.renderKey('r')}
        </div>
        <div className="App-board-row">
        {this.renderKey('s')}
        {this.renderKey('t')}
        {this.renderKey('u')}
        {this.renderKey('v')}
        {this.renderKey('w')}
        {this.renderKey('x')}
        </div>
        <div className="App-board-row">
        {this.renderKey('y')}
        {this.renderKey('z')}
        </div>
        <div className="App-board-row">
        {this.renderClearKey('clear')}
        {this.renderBackspaceKey('back')}
        {this.renderSpaceKey('_')}
        </div>
      </div>
    );
  }
}

export default App;
//<img src={logo} className="App-logo" alt="logo" />
