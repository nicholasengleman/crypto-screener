import React from 'react';
import './TotalCrypto.css';


class TotalCrypto extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			totalCryptos: 0
		}
	};



	render() {
		return (
			<div className="totalCrypto">Total Cryptos: {this.props.totalCryptos}</div>
		)
	}
}

export default TotalCrypto;




