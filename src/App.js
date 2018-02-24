import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import CryptoList from './CrypoList/CryptoList';

class App extends Component {

  render() {
    return (
      <div className="square">
          <Header/>
          <CryptoList/>
      </div>
    );
  }
}

export default App;
