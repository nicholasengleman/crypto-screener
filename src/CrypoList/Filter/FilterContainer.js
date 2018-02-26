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
				<FilterItem addFilter={this.props.addFilter} removeFilter={this.props.removeFilter} updateFilter={this.props.updateFilter} numberOfFilters={this.props.numberOfFilters} column="marketCap"/>
				<FilterItem addFilter={this.props.addFilter} removeFilter={this.props.removeFilter} updateFilter={this.props.updateFilter} numberOfFilters={this.props.numberOfFilters} column="price"/>
				<FilterItem addFilter={this.props.addFilter} removeFilter={this.props.removeFilter} updateFilter={this.props.updateFilter} numberOfFilters={this.props.numberOfFilters} column="Change1H"/>
				<FilterItem addFilter={this.props.addFilter} removeFilter={this.props.removeFilter} updateFilter={this.props.updateFilter} numberOfFilters={this.props.numberOfFilters} column="Change24H"/>
				<FilterItem addFilter={this.props.addFilter} removeFilter={this.props.removeFilter} updateFilter={this.props.updateFilter} numberOfFilters={this.props.numberOfFilters} column="Change7D"/>
				<FilterItem addFilter={this.props.addFilter} removeFilter={this.props.removeFilter} updateFilter={this.props.updateFilter} numberOfFilters={this.props.numberOfFilters} column="Volume"/>
			</div>
		)
	}
}

export default FilterContainer;