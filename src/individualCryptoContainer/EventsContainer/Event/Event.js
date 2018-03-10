import React from 'react';
import './Event.css';

const Event = (props) => (
	<li className='event'>
		<div className='eventDate'>{props.date}</div>
		<div className="eventInfo">
			<div className='eventTitle'>{props.title}</div>
			<div className='eventSummary'>{props.summary ? props.summary : 'Please view the source for more info.'}</div>
			<div className='links'>
				<div><a href={props.sourceurl}>View Source</a></div>
				<div><a href={props.eventurl}>View Event on Kryptocal</a></div>
			</div>
		</div>
	</li>
);

export default Event;