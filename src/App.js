import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App  = () => {
  return {
    ...Component.prototype,
    render() {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>
            This is a cool header!
          </h1>
        </div>
      );
    }
  }
};

export default App;
