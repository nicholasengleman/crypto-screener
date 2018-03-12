import React from 'react';
import './Summary.css';
import cryptoSummaries from "../../HelperFunctions/cryptoSummaries";

const CryptoSummary = ({id}) => (
	<section className="cryptoSummary">
		<p>"{cryptoSummaries(id, 'summary')}"</p>
		<p> ~ <a href={cryptoSummaries(id, 'moreinfourl')}>learn more here</a> ~</p>
	</section>
);

export default CryptoSummary;



