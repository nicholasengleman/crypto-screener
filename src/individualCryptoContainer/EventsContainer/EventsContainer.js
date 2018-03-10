import React from 'react';
import './EventsContainer.css';
import Event from './Event/Event';
import eventdata from  '../../HelpFunctions/EventData.json';

class EventsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.events = [];

		this.convertDate = this.convertDate.bind(this);
		this.removeDoubleName = this.removeDoubleName.bind(this);
	}

	convertDate(dateTime) {
		const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
		let date = dateTime.split("-");
		const year = date[0];
		const month = monthNames[parseInt(date[1], 10) - 1];
		const day = parseInt(date[2].substr(0, 2), 10);

		return `${month} ${day}, ${year}`;
	}

	removeDoubleName(title) {
		const firstParen = title.indexOf("(");
		if(firstParen && firstParen !== -1) {
			const secondParen =	title.indexOf(")");
			const title1 = title.slice(0, firstParen);
			const title2 = title.slice(secondParen + 1);
			return `${title1} ${title2}`;
		}
		return title;
	}

	render() {
		this.events = eventdata.filter(crypto => {
			if (crypto[this.props.symbol]) {
				return true;
			}
 		});
		this.events = this.events.slice(0, 5);
		console.log(this.events);
		return (
			<section className="eventsContainer">
			{
				this.events.length > 0 ? (this.events = this.events.map((event) => (
					<Event
						title={this.removeDoubleName(event[this.props.symbol]['0'].title)}
						summary={event[this.props.symbol]['1'].summary}
						sourceurl={event[this.props.symbol]['2'].sourceurl}
						eventurl={event[this.props.symbol]['3'].eventurl}
						date={this.convertDate(event[this.props.symbol]['4'].date)}
						key={event[this.props.symbol]['5'].eventID}
					/>
					))) : (<Event
								summary='No Event Data'
							/>)
			}
			</section>
		)
	}
}

export default EventsContainer;