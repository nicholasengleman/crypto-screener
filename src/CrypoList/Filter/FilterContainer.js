import React from 'react';
import './FilterContainer.css';
import './FilterItem/FilterItem';
import FilterItem from "./FilterItem/FilterItem";

class FilterContainer extends React.Component {
	render() {
		return (
			<div className="filterContainer">
				<FilterItem />
				<FilterItem />
				<FilterItem matchState={this.props.matchState} removeFilter={this.props.removeFilter} numberOfFilters={this.props.numberOfFilters} column="marketCap"/>
				<FilterItem matchState={this.props.matchState} removeFilter={this.props.removeFilter} numberOfFilters={this.props.numberOfFilters} column="price"/>
				<FilterItem matchState={this.props.matchState} removeFilter={this.props.removeFilter} numberOfFilters={this.props.numberOfFilters} column="Change1H"/>
				<FilterItem matchState={this.props.matchState} removeFilter={this.props.removeFilter} numberOfFilters={this.props.numberOfFilters} column="Change24H"/>
				<FilterItem matchState={this.props.matchState} removeFilter={this.props.removeFilter} numberOfFilters={this.props.numberOfFilters} column="Change7D"/>
				<FilterItem matchState={this.props.matchState} removeFilter={this.props.removeFilter} numberOfFilters={this.props.numberOfFilters} column="Volume"/>
			</div>
		)
	}
}

export default FilterContainer;