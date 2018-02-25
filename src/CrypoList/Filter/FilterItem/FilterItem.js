import React from 'react';
import './FilterItem.css';

class FilterItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false,
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
		this.props.matchState(this.state);
		this.setState({selected: true });
		event.preventDefault();
	}

	clear(event) {
		this.props.removeFilter(this.state.column);
		this.setState({
			selected: false,
			column: "",
			type: 'above',
			number1: "",
			number2: "" });
		event.preventDefault();
	}

	handleTypeChange(event) {
		this.setState({type: event.target.value});
	}

	handleNumber1Change(event) {
		this.setState({number1: parseFloat(event.target.value) });
	}
	handleNumber2Change(event) {
		this.setState({number2: parseFloat(event.target.value) });
	}


	render() {
		return (
			<div className="filterItem">
				<form id="action" className="center" >
					<select name="type" form="action" onChange={this.handleTypeChange}>
						<option value="above">Above</option>
						<option value="between">Between</option>
						<option value="below">Below</option>
					</select>
					<div className="numberInput">
						<input type="number" name="action" id="action" value={this.state.number1} onChange={this.handleNumber1Change}/>
						{(this.state.type === 'between') && <input type="number" name="action" id="action" value={this.state.number2} onChange={this.handleNumber2Change}/> }
					</div>
					{(this.state.selected) ? <button type="button" value="clear" onClick={this.clear}>Clear</button> :  <button type="button" value="submit" onClick={this.submit}>Submit</button>}
				</form>
			</div>
		)
	}


}

export default FilterItem;