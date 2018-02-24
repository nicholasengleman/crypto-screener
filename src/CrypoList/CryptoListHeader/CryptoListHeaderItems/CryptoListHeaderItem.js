import React from 'react';
import "./CryptoListHeaderItem.css";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSort, faFilter } from '@fortawesome/fontawesome-free-solid';


class CryptoListHeaderItem extends React.Component{
	render() {
		return (
			<div className="headerItem">
				<div className="sort" onClick={this.props.clickEvent}>
					<h3>{this.props.title}</h3>
					<FontAwesomeIcon  className="FontAwesomeIcon" icon={faSort} />
				</div>
				<div className="filter"><FontAwesomeIcon className="FontAwesomeIcon" icon={faFilter} /></div>
			</div>
		)
	}
}
export default CryptoListHeaderItem;