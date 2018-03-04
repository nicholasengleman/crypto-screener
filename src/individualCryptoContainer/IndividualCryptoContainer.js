import React from 'react';
import './IndivisualCryptoContainer.css';

import CryptoSummary from './CryptoSummary/CryptoSummary';
import CryptoEvents from './CryptoEvents/CryptoEvents';

class IndividualCryptoContainer extends React.Component {
	render() {
		return (
			<div className="individualCryptoContainer">
				<div className="chart">
					<p>Chart</p>
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