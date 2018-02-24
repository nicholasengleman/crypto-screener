import React from 'react';
import './CryptoItem.css';

class CryptoItem extends React.Component {
	render() {
		return (
			<li className="cryptoListItems">
					<div>{this.props.crypto}</div>
					<div>{this.props.marketCap}</div>
					<div>{this.props.price}</div>
					<div>{this.props.percentChange_1h}</div>
					<div>{this.props.percentChange_24h}</div>
					<div>{this.props.percentChange_7d}</div>
					<div>{this.props.volume24usd}</div>
			</li>
		)
	}
}

export default CryptoItem;