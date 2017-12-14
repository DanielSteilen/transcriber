import React from 'react';
import './App.css';

function Key(props) {
  return (
    <button className="square" onClick={props.onClick}>
      <img
        className="key-img"
        alt={props.value}
        src={require("" + props.image)}
      />
    </button>
  );
}

function SpecialKey(props) {
  return (
    <button className="square" onClick={props.onClick}>
    {props.value}
    </button>
  )
}

export default class Keyboard extends React.Component {
  renderKey(char, imagePath) {
    return (
      <Key
        value={char}
        onClick={() => this.props.onStandardClick(char)}
        image={imagePath}
      />
    );
  }

  renderDoubleKey(char) {
    return (
      <div className="double">
        {this.renderKey(char.toUpperCase(), "./images/kurrent/" + char + "_upper.jpg")}
        {this.renderKey(char, "./images/kurrent/" + char + "_lower.jpg")}
      </div>
    );
  }

  renderSpecialKey(char, handler) {
    return (
      <SpecialKey className="square"
        value={char}
        onClick={handler}
      />
    );
  }

  render() {
    return (
      <div className="keyboard">
        <div className="board-row">
        {this.renderDoubleKey('a')}
        {this.renderDoubleKey('b')}
        {this.renderDoubleKey('c')}
        {this.renderDoubleKey('d')}
        {this.renderDoubleKey('e')}
        {this.renderDoubleKey('f')}
        </div>
        <div className="board-row">
        {this.renderDoubleKey('g')}
        {this.renderDoubleKey('h')}
        {this.renderDoubleKey('i')}
        {this.renderDoubleKey('j')}
        {this.renderDoubleKey('k')}
        {this.renderDoubleKey('l')}
        </div>
        <div className="board-row">
        {this.renderDoubleKey('m')}
        {this.renderDoubleKey('n')}
        {this.renderDoubleKey('o')}
        {this.renderDoubleKey('p')}
        {this.renderDoubleKey('q')}
        {this.renderDoubleKey('r')}
        </div>
        <div className="board-row">
        {this.renderDoubleKey('s')}
        {this.renderDoubleKey('t')}
        {this.renderDoubleKey('u')}
        {this.renderDoubleKey('v')}
        {this.renderDoubleKey('w')}
        {this.renderDoubleKey('x')}
        </div>
        <div className="board-row">
        {this.renderDoubleKey('y')}
        {this.renderDoubleKey('z')}
        {this.renderSpecialKey('clear', () => this.props.onClearClick())}
        {this.renderSpecialKey('back', () => this.props.onBackspaceClick())}
        {this.renderSpecialKey('_', () => this.props.onStandardClick(' '))}
        </div>
      </div>
    );
  }
}
