export default function cryptoSummary(cryptoId) {
	const cryptoSummary = [
		{
			id: 'Bitcoin',
			summary: 'a cryptocurrency and worldwide payment system'
		}
	];

	for(let e = 0; e<cryptoSummary.length; e++) {
		if(cryptoSummary[e].id === cryptoId) {
			return cryptoSummary[e].summary;
		}
	}
	return 'a summary has not yet been created for this crypto';
}