
import React, { Component } from 'react';

import './App.css';
import Header from './header/Header';
import CryptoList from './CrypoList/CryptoList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
			totalCryptos: 0
		};

		this.getTotalCryptosAfterFilters = this.getTotalCryptosAfterFilters.bind(this);
    }

    getTotalCryptosAfterFilters(totalCryptos) {
		this.setState({totalCryptos});
    }

  render() {
    return (
      <div className="square">
          <Header totalCryptos={this.state.totalCryptos}/>
          <CryptoList getTotalCryptosAfterFilters={this.getTotalCryptosAfterFilters}/>
      </div>
    );
  }
}

export default App;
