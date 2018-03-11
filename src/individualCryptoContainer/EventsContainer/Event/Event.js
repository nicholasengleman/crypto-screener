import React from 'react';
import './Event.css';

const Event = (props) => (
	<li className='event'>
		<div className='eventDate'>{props.date}</div>
		<div className="eventInfo">
			<div className='eventTitle'>{props.title}</div>
			<div className='eventSummary'>{props.summary ? props.summary : 'View the source for more info.'}</div>
			<div className='links'>
				<a href={props.sourceurl}><button className="viewSourceButton">View Source</button></a>
				<a href={props.eventurl}><button className="viewKryptocalButton">View Event on Kryptocal</button></a>
			</div>
		</div>
	</li>
);

export default Event;