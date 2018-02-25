import React from 'react';
import './FilterContainer.css';
import './FilterItem/FilterItem';
import FilterItem from "./FilterItem/FilterItem";

class FilterContainer extends React.Component {
	render() {
		return (
			<div className="filterContainer">
				<FilterItem column="marketCap"/>
				<FilterItem matchState={this.props.matchState} removeFilter={this.props.removeFilter} column="marketCap"/>
				<FilterItem matchState={this.props.matchState} removeFilter={this.props.removeFilter} column="price"/>
				<FilterItem matchState={this.props.matchState} removeFilter={this.props.removeFilter} column="Change1H"/>
				<FilterItem matchState={this.props.matchState} removeFilter={this.props.removeFilter} column="Change24H"/>
				<FilterItem matchState={this.props.matchState} removeFilter={this.props.removeFilter} column="Change7D"/>
				<FilterItem matchState={this.props.matchState} removeFilter={this.props.removeFilter} column="Volume"/>
			</div>
		)
	}
}

export default FilterContainer;