import React from 'react';
import './CryptoItem.css';
import { Link } from 'react-router-dom';

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
					<div className="cryptoName">
						<Link
							to={{
								pathname: `${this.props.crypto}`,
								state: {symbol : this.props.symbol }
								}}>
							<h2>{this.props.crypto}</h2></Link></div>
					<div>${this.numberWithCommas(this.props.marketCap, false)}</div>
					<div>${this.numberWithCommas(this.props.price, true)}</div>
					<div className={this.props.percentChange_7d > 0 ? 'formatForProfit' : 'formatForLoss'}><p>{this.props.percentChange_1h}%</p></div>
					<div className={this.props.percentChange_7d > 0 ? 'formatForProfit' : 'formatForLoss'}><p>{this.props.percentChange_24h}%</p></div>
					<div className={this.props.percentChange_7d > 0 ? 'formatForProfit' : 'formatForLoss'}><p>{this.props.percentChange_7d}%</p></div>
					<div>${this.numberWithCommas(this.props.volume24usd, false)}</div>
			</li>
		)
	}
}

export default CryptoItem;