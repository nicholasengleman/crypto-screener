import React from 'react';
import './FilterTypeButton.css';

class FilterTypeButton extends React.Component {


	buttonClass() {
		if (this.props.selected) {
			if (this.props.type === this.props.value) {
				return 'typeButtons typeButtonSelected centerButton';
			} else {
				return 'hideButton';
			}
		} else {
			if (this.props.type === this.props.value) {
				return 'typeButtons typeButtonSelected';
			} else {
				return 'typeButtons';
			}
		}
	}

	render() {
		return (
			<button className={this.buttonClass()}
					value={this.props.value}
					onClick={this.props.clickEvent}>{this.props.value}</button>
		)
	}
}

export default FilterTypeButton;