import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../styles/App.css';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Jesus</h1>
          <Link to='/authorList'>Author List</Link>
          <Link to='/authorCreation'>Author Creation</Link>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


export default App;
