import React from 'react';
import './IndivisualCryptoContainer.css';
import TradingViewWidget from 'react-tradingview-widget';

import CryptoSummary from './CryptoSummary/CryptoSummary';
import CryptoEvents from './CryptoEvents/CryptoEvents';

class IndividualCryptoContainer extends React.Component {
	render() {
		return (
			<div className="individualCryptoContainer">
				<div className="chart">
					<TradingViewWidget symbol="COINBASE:BTCUSD" autosize allow_symbol_change={false} />
				</div>
				<div className="info">
					<CryptoSummary id={this.props.match.params.ID}/>
					<CryptoEvents symbol={this.props.location.state.symbol} name={this.props.match.params.ID}/>
				</div>
			</div>
		)
	}
}

export default IndividualCryptoContainer;