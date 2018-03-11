import React from 'react';
import './cryptoSummary.css';
import cryptoSummaries from "../../HelpFunctions/cryptoSummaries";

const CryptoSummary = ({id}) => (
	<section className="cryptoSummary">
		<p>"{cryptoSummaries(id, 'summary')}"</p>
		<p> ~ <a href={cryptoSummaries(id, 'moreinfourl')}>learn more here</a> ~</p>
	</section>
);

export default CryptoSummary;



