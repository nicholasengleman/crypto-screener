import React from 'react';
import './IndivisualCryptoContainer.css';
import TradingViewWidget from 'react-tradingview-widget';
import TradingViewIDLookup from '../HelperFunctions/TradingViewIDLookup';
import CryptoSummary from './Summary/Summary';

import EventsContainer from './EventsContainer/EventsContainer';

class IndividualCryptoContainer extends React.Component {
	render() {
		return (
			<div>
				<header className="individualcrypto"><h1>{this.props.match.params.ID}</h1></header>
				<div className="individualCryptoContainer">
					<div className="leftColumn">
						<CryptoSummary id={this.props.location.state.symbol}/>
						<div className="chart">
							<TradingViewWidget symbol={TradingViewIDLookup(this.props.location.state.symbol)}
											   interval={60}
											   save_image={false}
											   autosize
											   allow_symbol_change={false}/>
						</div>
					</div>
					<div className="rightColumn">
						<a href="https://kryptocal.com/submitevent"><button className="submitEvent">Submit event to Kryptocal</button></a>
						<EventsContainer symbol={this.props.location.state.symbol}
										 name={this.props.match.params.ID}/>
					</div>
				</div>
			</div>
		)
	}
}

export default IndividualCryptoContainer;