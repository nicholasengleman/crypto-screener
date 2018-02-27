import React from 'react';
import './CryptoList.css';
import CryptoItem from './CryptoItem/CryptoItem';
import CryptoListHeader from './CryptoListHeader/CryptoListHeader';
import FilterContainer from './Filter/FilterContainer';


class CryptoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cryptoData: [],
			sortType: {MarketCap: true},
			filters: []
		};

		this.sortByRank = this.sortByRank.bind(this);
		this.sortByName = this.sortByName.bind(this);
		this.sortByMkCap = this.sortByMkCap.bind(this);
		this.sortByPrice = this.sortByPrice.bind(this);
		this.sortByChange1H = this.sortByChange1H.bind(this);
		this.sortByChange24H = this.sortByChange24H.bind(this);
		this.sortByChange7D = this.sortByChange7D.bind(this);
		this.sortByVolume = this.sortByVolume.bind(this);

		this.addFilter = this.addFilter.bind(this);
		this.removeFilter = this.removeFilter.bind(this);
		this.updateFilter = this.updateFilter.bind(this);
	}

	updateFilter(filterToUpdate, newStateOfFilter) {
		let newState = this.state.filters.filter(function (filter) {
			if (filter.column !== filterToUpdate) {
				return true;
			}
			return false;
		});
		newState.push(newStateOfFilter);
		this.setState({filters: newState});
	}

	addFilter(FilterItemState) {
		this.setState({filters: [...this.state.filters, FilterItemState]});
	}

	removeFilter(column) {
		let newState = this.state.filters.filter(function (filter) {
			if (filter.column !== column) {
				return true;
			}
			return false;
		});
		this.setState({filters: newState});
	}

	sortByRank() {
		if (typeof this.state.sortType.Rank === 'undefined') {
			this.setState({sortType: {Rank: true}});
		} else {
			this.setState({sortType: {Rank: !this.state.sortType.Rank}});
		}
	}

	sortByName() {
		if (typeof this.state.sortType.Name === 'undefined') {
			this.setState({sortType: {Name: true}});
		} else {
			this.setState({sortType: {Name: !this.state.sortType.Name}});
		}
	}

	sortByMkCap() {
		if (typeof this.state.sortType.MarketCap === 'undefined') {
			this.setState({sortType: {MarketCap: true}});
		} else {
			this.setState({sortType: {MarketCap: !this.state.sortType.MarketCap}});
		}
	}


	sortByPrice() {
		if (typeof this.state.sortType.Price === 'undefined') {
			this.setState({sortType: {Price: true}});
		} else {
			this.setState({sortType: {Price: !this.state.sortType.Price}});
		}
	}

	sortByChange1H() {
		if (typeof this.state.sortType.Change1H === 'undefined') {
			this.setState({sortType: {Change1H: true}});
		} else {
			this.setState({sortType: {Change1H: !this.state.sortType.Change1H}});
		}
	}

	sortByChange24H() {
		if (typeof this.state.sortType.Change24H === 'undefined') {
			this.setState({sortType: {Change24H: true}});
		} else {
			this.setState({sortType: {Change24H: !this.state.sortType.Change24H}});
		}
	}

	sortByChange7D() {
		if (typeof this.state.sortType.Change7D === 'undefined') {
			this.setState({sortType: {Change7D: true}});
		} else {
			this.setState({sortType: {Change7D: !this.state.sortType.Change7D}});
		}
	}

	sortByVolume() {
		if (typeof this.state.sortType.Volume === 'undefined') {
			this.setState({sortType: {Volume: true}});
		} else {
			this.setState({sortType: {Volume: !this.state.sortType.Volume}});
		}
	}


	componentDidMount() {
		fetch('https://api.coinmarketcap.com/v1/ticker/?limit=500')
			.then(results => {
				return results.json();
			}).then(data => {

			data.forEach(function (crypto) {
				for (let property1 in crypto) {
					if (crypto.hasOwnProperty(property1)) {
						const parsedtoFloat = parseFloat(crypto[property1]);
						if (parsedtoFloat) {
							crypto[property1] = parseFloat(crypto[property1]);
						}
					}
				}
			});
			this.setState({cryptoData : data});
		});
	}


	render() {
		const sortedData = this.state.cryptoData.slice(0);
		return (
			<main>
				<FilterContainer addFilter={this.addFilter}
								 removeFilter={this.removeFilter}
								 updateFilter={this.updateFilter}
								 numberOfFilters={this.state.filters.length}/>
				<CryptoListHeader
					sortByRank={this.sortByRank}
					sortByName={this.sortByName}
					sortByMkCap={this.sortByMkCap}
					sortByPrice={this.sortByPrice}
					sortByChange1H={this.sortByChange1H}
					sortByChange24H={this.sortByChange24H}
					sortByChange7D={this.sortByChange7D}
					sortByVolume={this.sortByVolume}
				/>

				<ul className="CryptoList">
					{
						sortedData.filter(crypto => {
							let filters = this.state.filters;
							if (filters.length > 0) {
								let result = false;
								for (let e = 0; e < filters.length; e++) {
									if (filters[e].column === 'marketCap') {
										if (filters[e].type === 'above') {
											result = (crypto.market_cap_usd > filters[e].number1);
										}
										if (filters[e].type === 'between') {
											result = ((filters[e].number1 < crypto.market_cap_usd) && (crypto.market_cap_usd < filters[e].number2));
										}
										if (filters[e].type === 'below') {
											result = (crypto.market_cap_usd < filters[e].number1);
										}
									}
									if (filters[e].column === 'price') {
										if (filters[e].type === 'above') {
											result = (crypto.price_usd > filters[e].number1);
										}
										if (filters[e].type === 'between') {
											result = ((filters[e].number1 < crypto.price_usd) && (crypto.price_usd < filters[e].number2));

										}
										if (filters[e].type === 'below') {
											result = (crypto.price_usd < filters[e].number1);
										}
									}
									if (filters[e].column === 'Change1H') {
										if (filters[e].type === 'above') {
											result = (filters[e].number1 < crypto.percent_change_1h);
										}
										if (filters[e].type === 'between') {
											result = ((filters[e].number1 < crypto.percent_change_1h) && (crypto.percent_change_1h < filters[e].number2));
										}
										if (filters[e].type === 'below') {
											result = (crypto.percent_change_1h < filters[e].number1);
										}
									}
									if (filters[e].column === 'Change24H') {
										if (filters[e].type === 'above') {
											result = (crypto.percent_change_24h > filters[e].number1);
										}
										if (filters[e].type === 'between') {
											result = ((filters[e].number1 < crypto.percent_change_24h) && (crypto.percent_change_24h < filters[e].number2));
										}
										if (filters[e].type === 'below') {
											result = (crypto.percent_change_24h < filters[e].number1);
										}
									}
									if (filters[e].column === 'Change7D') {
										if (filters[e].type === 'above') {
											result = (crypto.percent_change_7d > filters[e].number1);
										}
										if (filters[e].type === 'between') {
											result = ((filters[e].number1 < crypto.percent_change_7d) && (crypto.percent_change_7d < filters[e].number2));
										}
										if (filters[e].type === 'below') {
											result = (crypto.percent_change_7d < filters[e].number1);
										}
									}
									if (filters[e].column === 'Volume') {
										if (filters[e].type === 'above') {
											result = (crypto['24h_volume_usd'] > filters[e].number1);
										}
										if (filters[e].type === 'between') {
											result = ((filters[e].number1 < crypto['24h_volume_usd']) && (crypto['24h_volume_usd'] < filters[e].number2));
										}
										if (filters[e].type === 'below') {
											result = (crypto['24h_volume_usd'] < filters[e].number1);
										}
									}
									if (result === false) {
										break;
									}
								}
								return result;
							}
							else return true;
						})
							.sort((a, b) => {
								if (this.state.sortType.Rank === true) {
									return a.rank - b.rank;
								}
								if (this.state.sortType.Rank === false) {
									return b.rank - a.rank;
								}
								if (this.state.sortType.Name === true) {
									return a.name.localeCompare(b.name);
								}
								if (this.state.sortType.Name === false) {
									return b.name.localeCompare(a.name);
								}
								if (this.state.sortType.Price === true) {
									return a.price_usd - b.price_usd;
								}
								if (this.state.sortType.Price === false) {
									return b.price_usd - a.price_usd;
								}
								if (this.state.sortType.MarketCap === true) {
									return b.market_cap_usd - a.market_cap_usd;
								}
								if (this.state.sortType.MarketCap === false) {
									return a.market_cap_usd - b.market_cap_usd;
								}
								if (this.state.sortType.Change1H === true) {
									return a.percent_change_1h - b.percent_change_1h;
								}
								if (this.state.sortType.Change1H === false) {
									return b.percent_change_1h - a.percent_change_1h;
								}
								if (this.state.sortType.Change24H === true) {
									return a.percent_change_24h - b.percent_change_24h;
								}
								if (this.state.sortType.Change24H === false) {
									return b.percent_change_24h - a.percent_change_24h;
								}
								if (this.state.sortType.Change7D === true) {
									return a.percent_change_7d - b.percent_change_7d;
								}
								if (this.state.sortType.Change7D === false) {
									return b.percent_change_7d - a.percent_change_7d;
								}
								if (this.state.sortType.Volume === true) {
									return a['24h_volume_usd'] - b['24h_volume_usd'];
								}
								if (this.state.sortType.Volume === false) {
									return b['24h_volume_usd'] - a['24h_volume_usd'];
								}
								return 0;
							})
							.map(crypto => (
								<CryptoItem
									key={crypto.id}
									rank={crypto.rank}
									crypto={crypto.name}
									marketCap={crypto.market_cap_usd}
									price={crypto.price_usd}
									percentChange_1h={crypto.percent_change_1h}
									percentChange_24h={crypto.percent_change_24h}
									percentChange_7d={crypto.percent_change_7d}
									volume24usd={crypto['24h_volume_usd']}
								/>
							))
					}
				</ul>
			</main>
		);
	}
}

export default CryptoList;
