import React from 'react';
import "./CryptoListHeaderItem.css";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faSort} from '@fortawesome/fontawesome-free-solid';


class CryptoListHeaderItem extends React.Component {
	render() {
		return (
			<div className="headerItem" onClick={this.props.clickEvent}>
				<div><h3>{this.props.title}</h3></div>
				<div><FontAwesomeIcon className="FontAwesomeIcon" icon={faSort}/></div>
			</div>
		)
	}
}

export default CryptoListHeaderItem;