import React from 'react';
import './IndivisualCryptoContainer.css';
import TradingViewWidget from 'react-tradingview-widget';
import TradingViewIDLookup from '../HelpFunctions/TradingViewIDLookup';
import CryptoSummary from './CryptoSummary/CryptoSummary';

import EventsContainer from './EventsContainer/EventsContainer';

class IndividualCryptoContainer extends React.Component {
	render() {
		return (
			<div className="individualCryptoContainer">

				<div className="firstColumn">
					<div className="individualcryptoName"><h1>{this.props.match.params.ID}</h1></div>
					<div className="chart">
						<TradingViewWidget symbol={TradingViewIDLookup(this.props.location.state.symbol)}
										   interval={60}
										   save_image={false}
										   autosize
										   allow_symbol_change={false}/>
					</div>
				</div>

				<div className="secondColumn">
					<CryptoSummary id={this.props.location.state.symbol}/>
					<EventsContainer symbol={this.props.location.state.symbol} name={this.props.match.params.ID}/>
				</div>

			</div>
		)
	}
}

export default IndividualCryptoContainer;