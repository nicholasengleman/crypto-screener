import React from 'react';
import './Event.css';

const Event = (props) => (
	<li className='event'>
		<div className='eventDate'>{props.date}</div>
		<div className="eventInfo">
			<div className='eventTitle'>{props.title}</div>
			<div className='eventSummary'>{props.summary}</div>
			<div className='links'>
				<div><a href={props.sourceLink}>View Source</a></div>
				<div><a href={props.kryptocalLink}>View Event on Kryptocal</a></div>
			</div>
		</div>
	</li>
);

export default Event;