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
		fetch(`https://kryptocal.com/api/events/coin/${this.props.symbol}`)
			.then(response => {
				return response.json();
			}).then(json => {
			this.setState({eventData: json});
		}).catch(ex => {
			console.log('parsing failed', ex);
		});
	}

	render() {
		return (
			<section>
				<div className='centerAddEventButton'><a href="https://kryptocal.com/submitevent"><button className='submitEvent'>Add {this.props.name} event on kryptocal.com</button></a></div>
				<ul className="eventList">
					{
						this.state.eventData.map(event => (
							<Event
								key={event.eventId}
								date={this.standardizeDate(event.fullEventDateString)}
								title={event.title}
								summary={event.summary}
						    	sourceLink={event.sourceUrl}
								kryptocalLink={event.eventUrl}
							/>
						))
					}
				</ul>
			</section>

		)
	}
}

export default CryptoEvents;