import React from 'react';
import './FilterItem.css';
import './FilterTypeButton/FilterTypeButton';
import FilterTypeButton from "./FilterTypeButton/FilterTypeButton";

class FilterItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false,
			newInput: false,
			column: "",
			type: "",
			number1: "",
			number2: ""
		};

		this.submit = this.submit.bind(this);
		this.clear = this.clear.bind(this);
		this.handleTypeChange = this.handleTypeChange.bind(this);
		this.handleNumber1Change = this.handleNumber1Change.bind(this);
		this.handleNumber2Change = this.handleNumber2Change.bind(this);
	}

	componentDidMount() {
		this.setState({column: this.props.column});
	}

	submit(event) {
		if (this.state.newInput) {
			this.props.updateFilter(this.state.column, this.state);
		} else {
			this.props.addFilter(this.state);
		}
		this.setState({selected: true, newInput: false});
		event.preventDefault();
	}

	clear(event) {
		this.props.removeFilter(this.state.column);
		this.setState({
			selected: false,
			newInput: false,
			type: "",
			number1: "",
			number2: ""
		});
		event.preventDefault();
	}

	handleTypeChange(event) {
		this.setState({type: event.target.value});
		if (this.state.selected) {
			this.setState({newInput: true});
		}
		event.preventDefault();
	}

	handleNumber1Change(event) {
		this.setState({number1: parseFloat(event.target.value)});
		if (this.state.selected) {
			this.setState({newInput: true});
		}
	}

	handleNumber2Change(event) {
		this.setState({number2: parseFloat(event.target.value)});
		if (this.state.selected) {
			this.setState({newInput: true});
		}
	}

	Buttons() {
		if (this.state.selected) {
			if (this.state.newInput) {
				return (
					<div className="buttonContainer">
						<button className="submit betweenButtons" type="button" value="submit" onClick={this.submit}>Filter</button>
						<button className="clear betweenButtons" type="button" value="clear" onClick={this.clear}>Clear
						</button>
					</div>
				)
			} else {
				return (
					<div className="buttonContainer">
					<button className="clear" type="button" value="clear" onClick={this.clear}>Clear</button>
				</div>
				)
			}
		} else {
			return (
				<div className="buttonContainer">
				<button className="submit" type="button" value="submit" onClick={this.submit}>Filter</button>
			</div>
			)
		}
	}


	render() {
		return (
			<div className={this.state.selected ? 'filterItem fullOpacity' : this.props.numberOfFilters < 1 ? 'filterItem' : 'filterItem noOpacity'}>
				{this.Buttons()}
				<p className="coins">Coins with {this.props.column} </p>
				<form id="action">
					<div className="flexBox">
						<FilterTypeButton selected={this.state.selected} type={this.state.type} clickEvent={this.handleTypeChange} value="below"/>
						<FilterTypeButton selected={this.state.selected} type={this.state.type} clickEvent={this.handleTypeChange} value="between"/>
						<FilterTypeButton selected={this.state.selected} type={this.state.type} clickEvent={this.handleTypeChange} value="above"/>
					</div>
					<div className="numberInput">
						<input type="number" name="action" id="action" value={this.state.number1}
							   onChange={this.handleNumber1Change}
							   className={(this.state.type === 'between') ? 'betweenWidth' : ''}/>
						{(this.state.type === 'between') && <input type="number" name="action" id="action"
																   value={this.state.number2}
																   onChange={this.handleNumber2Change}
																   className='betweenWidth'/>}
					</div>

				</form>
			</div>
		)
	}


}

export default FilterItem;