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
			type: 'above',
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
			type: 'above',
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
	}

	handleNumber1Change(event) {
		this.setState({number1: event.target.value});
		if (this.state.selected) {
			this.setState({newInput: true});
		}
	}

	handleNumber2Change(event) {
		this.setState({number2: event.target.value});
		if (this.state.selected) {
			this.setState({newInput: true});
		}
	}

	Buttons() {
		if (this.state.selected) {
			if (this.state.newInput) {
				return (
					<div className="buttonContainer">
						<button className="halfWidth submit" type="button" value="submit" onClick={this.submit}>Submit
						</button>
						<button className="halfWidth clear" type="button" value="clear" onClick={this.clear}>Clear
						</button>
					</div>
				)
			} else {
				return <div className="buttonContainer">
					<button className="clear" type="button" value="clear" onClick={this.clear}>Clear</button>
				</div>
			}
		} else {
			return <div className="buttonContainer">
				<button className="submit" type="button" value="submit" onClick={this.submit}>Submit</button>
			</div>
		}
	}


	render() {
		return (
			<div
				className={this.state.selected ? 'filterItem fullOpacity' : this.props.numberOfFilters < 1 ? 'filterItem' : 'filterItem noOpacity'}>
				<form id="action" className="center">
					<FilterTypeButton type=">cryptos<"/>
					<div className="flexBox">
						<FilterTypeButton type="cryptos<"/>
						<div className="numberInput">
							<input type="text" name="action" id="action" value={this.state.number1}
								   onChange={this.handleNumber1Change}
								   className={this.state.selected ? 'greyBorder' : 'blackBorder'}/>
							{(this.state.type === 'between') &&
							<input type="number" name="action" id="action" value={this.state.number2}
								   onChange={this.handleNumber2Change}
								   className={this.state.selected ? 'greyBorder' : 'blackBorder'}/>}
						</div>
						<FilterTypeButton type="<cryptos"/>
					</div>
					{this.Buttons()}
				</form>
			</div>
		)
	}


}

export default FilterItem;