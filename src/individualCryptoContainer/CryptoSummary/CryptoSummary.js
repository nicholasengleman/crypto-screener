import React from 'react';
import './cryptoSummary.css';
import cryptoSummaries from "../../cryptoSummaries";

const CryptoSummary = ({id}) => (
	<section className="cryptoSummary">
		<p>{cryptoSummaries(id)}</p>
	</section>
);

export default CryptoSummary;



