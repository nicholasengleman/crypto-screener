import React from 'react';
import Event from './Event/Event';
import './cryptoEvents.css';


class CryptoEvents extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			eventData: []
		}

		this.standardizeDate = this.standardizeDate.bind(this);
	}

	standardizeDate(date) {

		return date;
	}


	componentDidMount() {
		fetch(`https://coindar.org/api/v1/coinEvents?name=btc`)
			.then(response => {
				return response.json();
			}).then(json => {
			console.log('parsing passed', json);
			this.setState({eventData: json});
		}).catch(ex => {
			console.log('parsing failed', ex);
		});
	}

	render() {
		return (
			<p>test</p>

		)
	}
}

export default CryptoEvents;