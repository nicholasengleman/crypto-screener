import React from "react";
import './header.css';
import TotalCrypto from '../TotalCrypto/TotalCrypto';

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<h1>React Cryptocurrency Filter</h1>
				<TotalCrypto className="totalCrypto" totalCryptos={this.props.totalCryptos}/>
			</div>
		)
	}
}

export default Header;