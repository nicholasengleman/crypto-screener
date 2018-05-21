import React from 'react';
import './FilterContainer.css';
import './FilterItem/FilterItem';
import FilterItem from "./FilterItem/FilterItem";

const FilterContainer = (props) => {
		return (
			<div className="filterContainer">
				<div className="spaceMaker1"></div>
				<div className="spaceMaker2"></div>
				<FilterItem addFilter={props.addFilter}
							removeFilter={props.removeFilter}
							updateFilter={props.updateFilter}
							numberOfFilters={props.numberOfFilters}
							column="marketCap"
							name="market cap:"
				/>
				<FilterItem addFilter={props.addFilter}
							removeFilter={props.removeFilter}
							updateFilter={props.updateFilter}
							numberOfFilters={props.numberOfFilters}
							column="price"
							name="price:"
				/>
				<FilterItem addFilter={props.addFilter}
							removeFilter={props.removeFilter}
							updateFilter={props.updateFilter}
							numberOfFilters={props.numberOfFilters}
							column="Change1H"
							name="1hr change:"
				/>
				<FilterItem addFilter={props.addFilter}
							removeFilter={props.removeFilter}
							updateFilter={props.updateFilter}
							numberOfFilters={props.numberOfFilters}
							column="Change24H"
							name="24hr change:"
				/>
				<FilterItem addFilter={props.addFilter}
							removeFilter={props.removeFilter}
							updateFilter={props.updateFilter}
							numberOfFilters={props.numberOfFilters}
							column="Change7D"
							name="7 day change:"
				/>
				<FilterItem addFilter={props.addFilter}
							removeFilter={props.removeFilter}
							updateFilter={props.updateFilter}
							numberOfFilters={props.numberOfFilters}
							column="Volume"
							name="volume:"
				/>
			</div>
		)
};

export default FilterContainer;