import React from 'react';
import './CryptoItem.css';

class CryptoItem extends React.Component {
	constructor(props) {
		super(props);
		this.numberWithCommas = this.numberWithCommas.bind(this);
	}


	numberWithCommas(x, leaveDecimal) {
		let parts;
		if(leaveDecimal) {
			parts = x.toFixed(2).toString().split(".");
		} else {
			parts = x.toString().split(".");
		}
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return parts.join(".");
	}

	render() {
		return (
			<li className="cryptoListItems">
					<div>{this.props.rank}</div>
					<div>{this.props.crypto}</div>
					<div>${this.numberWithCommas(this.props.marketCap, false)}</div>
					<div>${this.numberWithCommas(this.props.price, true)}</div>
					<div>{this.props.percentChange_1h}%</div>
					<div>{this.props.percentChange_24h}%</div>
					<div>{this.props.percentChange_7d}%</div>
					<div>${this.numberWithCommas(this.props.volume24usd, false)}</div>
			</li>
		)
	}
}

export default CryptoItem;