import React from 'react';
import './CryptoList.css';
import CryptoItem from './CryptoItem/CryptoItem';
import CryptoListHeader from './CryptoListHeader/CryptoListHeader';
import FilterContainer from './Filter/FilterContainer';

const cryptoData = [
	{
		id: 'bitcoin',
		name: 'Bitcoin',
		symbol: 'BTC',
		rank: '1',
		price_usd: '10230.6',
		price_btc: '1.0',
		'24h_volume_usd': '7595710000.0',
		market_cap_usd: '172715802615',
		available_supply: '16882275.0',
		total_supply: '16882275.0',
		max_supply: '21000000.0',
		percent_change_1h: '-0.75',
		percent_change_24h: '1.06',
		percent_change_7d: '1.11',
		last_updated: '1519414768',
	},
	{
		id: 'ethereum',
		name: 'Ethereum',
		symbol: 'ETH',
		rank: '2',
		price_usd: '854.617',
		price_btc: '0.0845263',
		'24h_volume_usd': '2273350000.0',
		market_cap_usd: '83581060221.0',
		available_supply: '97799436.0',
		total_supply: '97799436.0',
		max_supply: null,
		percent_change_1h: '-0.85',
		percent_change_24h: '4.72',
		percent_change_7d: '-9.1',
		last_updated: '1519414753',
	},
	{
		id: 'ripple',
		name: 'Ripple',
		symbol: 'XRP',
		rank: '3',
		price_usd: '0.994848',
		price_btc: '0.00009840',
		'24h_volume_usd': '907985000.0',
		market_cap_usd: '38893385771.0',
		available_supply: '39094802192.0',
		total_supply: '99992622540.0',
		max_supply: '100000000000',
		percent_change_1h: '-0.55',
		percent_change_24h: '5.8',
		percent_change_7d: '-12.33',
		last_updated: '1519414740',
	},
	{
		id: 'bitcoin-cash',
		name: 'Bitcoin Cash',
		symbol: 'BCH',
		rank: '4',
		price_usd: '1257.4',
		price_btc: '0.124363',
		'24h_volume_usd': '498661000.0',
		market_cap_usd: '21355178640.0',
		available_supply: '16983600.0',
		total_supply: '16983600.0',
		max_supply: '21000000.0',
		percent_change_1h: '-1.32',
		percent_change_24h: '3.61',
		percent_change_7d: '-16.99',
		last_updated: '1519414753',
	},
	{
		id: 'litecoin',
		name: 'Litecoin',
		symbol: 'LTC',
		rank: '5',
		price_usd: '207.485',
		price_btc: '0.0205214',
		'24h_volume_usd': '1044780000.0',
		market_cap_usd: '11484197886.0',
		available_supply: '55349533.0',
		total_supply: '55349533.0',
		max_supply: '84000000.0',
		percent_change_1h: '-1.32',
		percent_change_24h: '5.38',
		percent_change_7d: '-9.72',
		last_updated: '1519414741',
	},
	{
		id: 'cardano',
		name: 'Cardano',
		symbol: 'ADA',
		rank: '6',
		price_usd: '0.342118',
		price_btc: '0.00003384',
		'24h_volume_usd': '222541000.0',
		market_cap_usd: '8870117518.0',
		available_supply: '25927070538.0',
		total_supply: '31112483745.0',
		max_supply: '45000000000.0',
		percent_change_1h: '-0.72',
		percent_change_24h: '0.79',
		percent_change_7d: '-15.18',
		last_updated: '1519414755',
	},
	{
		id: 'neo',
		name: 'NEO',
		symbol: 'NEO',
		rank: '7',
		price_usd: '119.716',
		price_btc: '0.0118406',
		'24h_volume_usd': '186795000.0',
		market_cap_usd: '7781540000.0',
		available_supply: '65000000.0',
		total_supply: '100000000.0',
		max_supply: null,
		percent_change_1h: '-1.12',
		percent_change_24h: '4.36',
		percent_change_7d: '-6.74',
		last_updated: '1519414747',
	},
	{
		id: 'stellar',
		name: 'Stellar',
		symbol: 'XLM',
		rank: '8',
		price_usd: '0.378097',
		price_btc: '0.00003740',
		'24h_volume_usd': '58192000.0',
		market_cap_usd: '6982626253.0',
		available_supply: '18467817130.0',
		total_supply: '103708899665',
		max_supply: null,
		percent_change_1h: '-0.23',
		percent_change_24h: '3.08',
		percent_change_7d: '-16.49',
		last_updated: '1519414743',
	},
	{
		id: 'eos',
		name: 'EOS',
		symbol: 'EOS',
		rank: '9',
		price_usd: '8.46572',
		price_btc: '0.00083731',
		'24h_volume_usd': '286853000.0',
		market_cap_usd: '5827835764.0',
		available_supply: '688404030.0',
		total_supply: '900000000.0',
		max_supply: '1000000000.0',
		percent_change_1h: '-0.6',
		percent_change_24h: '3.37',
		percent_change_7d: '-15.01',
		last_updated: '1519414751',
	},
	{
		id: 'dash',
		name: 'Dash',
		symbol: 'DASH',
		rank: '10',
		price_usd: '631.936',
		price_btc: '0.0625019',
		'24h_volume_usd': '91802000.0',
		market_cap_usd: '4993522064.0',
		available_supply: '7901943.0',
		total_supply: '7901943.0',
		max_supply: '18900000.0',
		percent_change_1h: '0.06',
		percent_change_24h: '3.08',
		percent_change_7d: '-9.13',
		last_updated: '1519414741',
	},
	{
		id: 'iota',
		name: 'IOTA',
		symbol: 'MIOTA',
		rank: '11',
		price_usd: '1.7484',
		price_btc: '0.00017293',
		'24h_volume_usd': '39426800.0',
		market_cap_usd: '4859730747.0',
		available_supply: '2779530283.0',
		total_supply: '2779530283.0',
		max_supply: '2779530283.0',
		percent_change_1h: '-0.77',
		percent_change_24h: '8.96',
		percent_change_7d: '-16.34',
		last_updated: '1519414751',
	},
	{
		id: 'monero',
		name: 'Monero',
		symbol: 'XMR',
		rank: '12',
		price_usd: '285.209',
		price_btc: '0.0282087',
		'24h_volume_usd': '86561200.0',
		market_cap_usd: '4493424368.0',
		available_supply: '15754848.0',
		total_supply: '15754848.0',
		max_supply: null,
		percent_change_1h: '-0.68',
		percent_change_24h: '-1.26',
		percent_change_7d: '-2.28',
		last_updated: '1519414744',
	},
	{
		id: 'nem',
		name: 'NEM',
		symbol: 'XEM',
		rank: '13',
		price_usd: '0.437206',
		price_btc: '0.00004324',
		'24h_volume_usd': '25512600.0',
		market_cap_usd: '3934854000.0',
		available_supply: '8999999999.0',
		total_supply: '8999999999.0',
		max_supply: null,
		percent_change_1h: '-0.63',
		percent_change_24h: '2.2',
		percent_change_7d: '-22.97',
		last_updated: '1519414745',
	},
	{
		id: 'ethereum-classic',
		name: 'Ethereum Classic',
		symbol: 'ETC',
		rank: '14',
		price_usd: '36.568',
		price_btc: '0.00361677',
		'24h_volume_usd': '1052170000.0',
		market_cap_usd: '3659350106.0',
		available_supply: '100069736.0',
		total_supply: '100069736.0',
		max_supply: null,
		percent_change_1h: '-1.24',
		percent_change_24h: '11.31',
		percent_change_7d: '5.44',
		last_updated: '1519414748',
	},
	{
		id: 'vechain',
		name: 'VeChain',
		symbol: 'VEN',
		rank: '15',
		price_usd: '5.96528',
		price_btc: '0.00059',
		'24h_volume_usd': '62588700.0',
		market_cap_usd: '2846193963.0',
		available_supply: '477126633.0',
		total_supply: '873378637.0',
		max_supply: null,
		percent_change_1h: '-0.67',
		percent_change_24h: '8.42',
		percent_change_7d: '3.83',
		last_updated: '1519414754',
	},
	{
		id: 'tron',
		name: 'TRON',
		symbol: 'TRX',
		rank: '16',
		price_usd: '0.0420337',
		price_btc: '0.00000416',
		'24h_volume_usd': '153670000.0',
		market_cap_usd: '2763639798.0',
		available_supply: '65748192475.0',
		total_supply: '100000000000',
		max_supply: null,
		percent_change_1h: '-0.69',
		percent_change_24h: '3.57',
		percent_change_7d: '-16.85',
		last_updated: '1519414754',
	},
	{
		id: 'lisk',
		name: 'Lisk',
		symbol: 'LSK',
		rank: '17',
		price_usd: '22.7895',
		price_btc: '0.002254',
		'24h_volume_usd': '69226900.0',
		market_cap_usd: '2328174046.0',
		available_supply: '102159944.0',
		total_supply: '118376724.0',
		max_supply: null,
		percent_change_1h: '-1.26',
		percent_change_24h: '5.36',
		percent_change_7d: '-28.53',
		last_updated: '1519414747',
	},
	{
		id: 'tether',
		name: 'Tether',
		symbol: 'USDT',
		rank: '18',
		price_usd: '1.00847',
		price_btc: '0.00009974',
		'24h_volume_usd': '2783250000.0',
		market_cap_usd: '2235919996.0',
		available_supply: '2217140814.0',
		total_supply: '2280109970.0',
		max_supply: null,
		percent_change_1h: '0.61',
		percent_change_24h: '0.53',
		percent_change_7d: '0.64',
		last_updated: '1519414745',
	},
	{
		id: 'bitcoin-gold',
		name: 'Bitcoin Gold',
		symbol: 'BTG',
		rank: '19',
		price_usd: '121.597',
		price_btc: '0.0120266',
		'24h_volume_usd': '53496400.0',
		market_cap_usd: '2047900023.0',
		available_supply: '16841699.0',
		total_supply: '16941699.0',
		max_supply: '21000000.0',
		percent_change_1h: '-0.75',
		percent_change_24h: '4.51',
		percent_change_7d: '-12.67',
		last_updated: '1519414756',
	},
	{
		id: 'qtum',
		name: 'Qtum',
		symbol: 'QTUM',
		rank: '20',
		price_usd: '27.4299',
		price_btc: '0.00271297',
		'24h_volume_usd': '115639000.0',
		market_cap_usd: '2027156837.0',
		available_supply: '73903180.0',
		total_supply: '100403180.0',
		max_supply: null,
		percent_change_1h: '-0.22',
		percent_change_24h: '3.67',
		percent_change_7d: '-16.9',
		last_updated: '1519414751',
	},
];

class CryptoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cryptoData: [],
			sortType: {MarketCap: true},
			filters: []
		};

		this.sortByMkCap = this.sortByMkCap.bind(this);
		this.sortByPrice = this.sortByPrice.bind(this);
		this.sortByChange1H = this.sortByChange1H.bind(this);
		this.sortByChange24H = this.sortByChange24H.bind(this);
		this.sortByChange7D = this.sortByChange7D.bind(this);
		this.sortByVolume = this.sortByVolume.bind(this);
		this.matchState = this.matchState.bind(this);
		this.removeFilter = this.removeFilter.bind(this);
	}

	matchState(FilterItemState) {
		this.setState({filters: [...this.state.filters, FilterItemState]});
	}

	removeFilter(column) {
		let newState = this.state.filters.filter(function(filter) {
			if(filter.column !== column) {
				return true;
			}
			return false;
		});
		this.setState({filters: newState });
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
		// cryptoData.forEach(function(crypto) {
		// 	Object.keys(crypto).forEach(function(property, index) {
		// 		if(index > 3) {
		// 			console.log(crypto);
		// 		}
		// 	})
		// });


		this.setState({cryptoData});
	}


	render() {
		const sortedData = this.state.cryptoData.slice(0);
		return (
			<main>
				<ul className="CryptoList">
					<FilterContainer matchState={this.matchState} removeFilter={this.removeFilter}/>
					<CryptoListHeader
						sortByMkCap={this.sortByMkCap}
						sortByPrice={this.sortByPrice}
						sortByChange1H={this.sortByChange1H}
						sortByChange24H={this.sortByChange24H}
						sortByChange7D={this.sortByChange7D}
						sortByVolume={this.sortByVolume}
					/>
					{
						sortedData.filter(crypto => {
							let filters = this.state.filters;
							if(filters.length>0) {
								let result = false;
								for (let e = 0; e < filters.length; e++) {
									if (filters[e].column === 'marketCap') {
										if (filters[e].type === 'above') {
											result = (parseFloat(crypto.market_cap_usd) > filters[e].number1);
										}
										if (filters[e].type === 'between') {
											result = ((filters[e].number1 < parseFloat(crypto.market_cap_usd)) && (parseFloat(crypto.market_cap_usd) < filters[e].number2));
										}
										if (filters[e].type === 'below') {
											result = (parseFloat(crypto.market_cap_usd) < filters[e].number1);
										}
									}
									if (filters[e].column === 'price') {
										if (filters[e].type === 'above') {
											result = (parseFloat(crypto.price_usd) > filters[e].number1);
										}
										if (filters[e].type === 'between') {
											result = ((filters[e].number1 < parseFloat(crypto.price_usd)) && (parseFloat(crypto.price_usd) < filters[e].number2));

										}
										if (filters[e].type === 'below') {
											result = (parseFloat(crypto.price_usd) < filters[e].number1);
										}
									}
									if (filters[e].column === 'Change1H') {
										if (filters[e].type === 'above') {
											result = (filters[e].number1 < parseFloat(crypto.percent_change_1h));
										}
										if (filters[e].type === 'between') {
											result = ((filters[e].number1 < parseFloat(crypto.percent_change_1h)) && (parseFloat(crypto.percent_change_1h) < filters[e].number2));
										}
										if (filters[e].type === 'below') {
											result = (parseFloat(crypto.percent_change_1h) < filters[e].number1);
										}
									}
									if (filters[e].column === 'Change24H') {
										if (filters[e].type === 'above') {
											result = (parseFloat(crypto.percent_change_24h) > filters[e].number1);
										}
										if (filters[e].type === 'between') {
											result = ((filters[e].number1 < parseFloat(crypto.percent_change_24h)) && (parseFloat(crypto.percent_change_24h) < filters[e].number2));
										}
										if (filters[e].type === 'below') {
											result = (parseFloat(crypto.percent_change_24h) < filters[e].number1);
										}
									}
									if (filters[e].column === 'Change7D') {
										if (filters[e].type === 'above') {
											result = (parseFloat(crypto.percent_change_7d) > filters[e].number1);
										}
										if (filters[e].type === 'between') {
											result = ((filters[e].number1 < parseFloat(crypto.percent_change_7d)) && (parseFloat(crypto.percent_change_7d) < filters[e].number2));
										}
										if (filters[e].type === 'below') {
											result = (parseFloat(crypto.percent_change_7d) < filters[e].number1);
										}
									}
									if (filters[e].column === 'Volume') {
										if (filters[e].type === 'above') {
											result = (parseFloat(crypto['24h_volume_usd']) > filters[e].number1);
										}
										if (filters[e].type === 'between') {
											result = ((filters[e].number1 < parseFloat(crypto['24h_volume_usd'])) && (parseFloat(crypto['24h_volume_usd']) < filters[e].number2));
										}
										if (filters[e].type === 'below') {
											result = (parseFloat(crypto['24h_volume_usd']) < filters[e].number1);
										}
									}
									if(result===false) { break; }
								}
								return result;
							}
							else return true;
						})
							.sort((a, b) => {
								if (this.state.sortType.Price === true) {
									return a.price_usd - b.price_usd;
								}
								if (this.state.sortType.Price === false) {
									return b.price_usd - a.price_usd;
								}
								if (this.state.sortType.MarketCap === true) {
									return a.market_cap_usd - b.market_cap_usd;
								}
								if (this.state.sortType.MarketCap === false) {
									return b.market_cap_usd - a.market_cap_usd;
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
