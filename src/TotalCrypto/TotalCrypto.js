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
			<div className="totalCryptoContainer">
				<div className="totalCryptoNumber"><p>Total Coins: <span className="bold">{this.props.totalCryptos}</span></p></div>
			</div>
		)
	}
}

export default TotalCrypto;




