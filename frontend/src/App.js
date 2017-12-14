import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Doc from './Document';
import Keyboard from'./Keyboard';
import {Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';



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
      <Row>
          <header className="header">
            <h1 className="title">Transcriber</h1>
          </header>
      </Row>
      <Row>
      <Col className="outer-col" md={4} >
        <p>Col1</p>
      </Col>
        <Col md={4}>
          <Doc/>
        </Col>
        <Col className="outer-col" md={4} >
          <p>Col3</p>
        </Col>
      </Row>
          <p className="display">
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
//<img src={logo} className="logo" alt="logo" />
