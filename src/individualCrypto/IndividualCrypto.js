import React from 'react';

class IndividualCrypto extends React.Component {
	render() {
		return (
			<p>{this.props.match.params.ID}</p>
		)
	}
}

export default IndividualCrypto;