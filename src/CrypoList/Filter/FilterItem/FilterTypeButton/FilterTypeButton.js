import React from 'react';
import './FilterTypeButton.css';

class FilterTypeButton extends React.Component {


render() {
		return (
			<button className={this.props.type ===  this.props.value ? 'typeButtons typeButtonSelected' : 'typeButtons'}
					value={this.props.value}
					onClick={this.props.clickEvent}>{this.props.value}</button>
		)
	}
}

export default FilterTypeButton;