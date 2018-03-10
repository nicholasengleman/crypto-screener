export default function cryptoData(cryptoId) {
	const cryptoSummary = [
		{ id: 'BTC',  summary: 'Bitcoin is a cryptocurrency and worldwide payment system' },
		{ id: 'ETH',  summary: 'Ethereum is the chinease version of Bitcoin' }
	];

	for(let e = 0; e<cryptoSummary.length; e++) {
		if(cryptoSummary[e].id === cryptoId) {
			return cryptoSummary[e].summary;
		}
	}
	return 'a summary has not yet been created for this crypto';
}