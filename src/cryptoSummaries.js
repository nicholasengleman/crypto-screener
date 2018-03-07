export default function cryptoData(cryptoId) {
	const cryptoSummary = [
		{
			id: 'Bitcoin',
			summary: 'a cryptocurrency and worldwide payment system'
		},
		{
			id: 'NEO',
			summary: 'the chinease version of Etherium'
		}
	];

	for(let e = 0; e<cryptoSummary.length; e++) {
		if(cryptoSummary[e].id === cryptoId) {
			return cryptoData[e].summary;
		}
	}
	return 'a summary has not yet been created for this crypto';
}