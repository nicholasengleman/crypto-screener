import React from 'react';
import './CryptoListHeader.css';
import CryptoListHeaderItem from "./CryptoListHeaderItems/CryptoListHeaderItem";

class CryptoListHeader extends React.Component {

	render() {
		return (
			<li className="CryptoListHeader">
					<CryptoListHeaderItem title="Name"/>
					<CryptoListHeaderItem title="Market Cap" clickEvent={this.props.sortByMkCap}/>
					<CryptoListHeaderItem title="Price" clickEvent={this.props.sortByPrice}/>
					<CryptoListHeaderItem title="Change(1h)" clickEvent={this.props.sortByChange1H}/>
					<CryptoListHeaderItem title="Change(24h)" clickEvent={this.props.sortByChange24H}/>
					<CryptoListHeaderItem title="Change(7D)" clickEvent={this.props.sortByChange7D}/>
					<CryptoListHeaderItem title="Volume" clickEvent={this.props.sortByVolume}/>
			</li>
		)
	}
}

export default CryptoListHeader;