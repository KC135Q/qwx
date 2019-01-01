import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header/'
import Weather from './Component/Weather/'

class App extends Component {
  render() {
    return (
      <div className="app  blue lighten-4">
        <Header />
        <Weather />
      </div>
    );
  }
}

export default App;
