export default function cryptoData(cryptoId, returndata) {
	const cryptoSummary = [
		{
			id: 'BTC',
			summary: '...a cryptocurrency and worldwide payment system. It is the first decentralized digitalcurrency, as the system works without a central bank or single administrator.',
			moreinfourl: 'https://en.wikipedia.org/wiki/Bitcoin'
		},
		{
			id: 'ETH',
			summary: '...an open-source, public, blockchain-based distributed computing platform and operating system featuring smart contract functionality. It supports a modified version of Nakamoto consensus via transaction based state transitions.',
			moreinfourl: 'https://en.wikipedia.org/wiki/Ethereum'
		},
		{
			id: 'XRP',
			summary: '...a real-time gross settlement system, currency exchange and remittance network created by the Ripple company. Also called the Ripple Transaction Protocol (RTXP) or Ripple protocol, it is built upon a distributed open source internet protocol, consensus ledger and native cryptocurrency abbreviated as XRP (ripples).',
			moreinfourl: 'https://en.wikipedia.org/wiki/Ripple_(payment_protocol)'
		},
		{
			id: 'BCH',
			summary: '...a fork of Bitcoin which brings new features such as On Chain Scalability, new transactions signatures, new difficulty adjustment algorithm and a decentralized development team.',
			moreinfourl: 'https://www.bitcoincash.org/#about'
		},
		{
			id: 'LTC',
			summary: '...a peer-to-peer cryptocurrency and open source software project inspired by, and in technical details is nearly identical to, Bitcoin. Litecoin processes a block every 2.5 minutes vs Bitcoin\'s 10 minutes and Litecoin uses  scrypt in its proof-of-work algorithm.',
			moreinfourl: 'https://en.wikipedia.org/wiki/Litecoin'
		},
		{
			id: 'NEO',
			summary: '..a non-profit community-based blockchain project that utilizes blockchain technology and digital identity to digitize assets, to automate the management of digital assets using smart contracts, and to realize a "smart economy" with a distributed network',
			moreinfourl: 'https://neo.org/'
		},
		{
			id: 'ADA',
			summary: '...a cryptocurrency that is also a technological platform that will be capable of running financial applications currently used every day by individuals, organisations and governments all around the world.',
			moreinfourl: 'https://www.cardanohub.org/en/what-is-cardano/'
		},
		{
			id: 'XLM',
			summary: '...an open-source protocol for exchanging money.',
			moreinfourl: 'https://en.wikipedia.org/wiki/Stellar_(payment_network)'
		},
		{
			id: 'XLM',
			summary: '...an open-source protocol for exchanging money based on the Ripple protocol with a new consensus algorithm',
			moreinfourl: 'https://en.wikipedia.org/wiki/Stellar_(payment_network)'
		},
		{
			id: 'EOS',
			summary: '...a blockchain architecture designed to enable vertical and horizontal scaling of decentralized applications. This is achieved through an operating system-like construct upon which applications can be built.',
			moreinfourl: 'https://eos.io/'
		},
		{
			id: 'XMR',
			summary: '..an open-source cryptocurrency created in April 2014 that focuses on privacy and decentralization. Monero aims to improve on existing cryptocurrency design by obscuring sender, recipient and amount of every transaction made as well as making the mining process more egalitarian.',
			moreinfourl: 'https://en.wikipedia.org/wiki/Monero_(cryptocurrency)'
		},
		{
			id: 'DASH',
			summary: '...an open source peer-to-peer cryptocurrency built on top of Bitcoin\'s feature set, offering instant transactions, private transactions and operates a self-governing and self-funding model that enables the Dash network to pay individuals and businesses to perform work that adds value to the network',
			moreinfourl: 'https://en.wikipedia.org/wiki/Dash_(cryptocurrency)'
		},
		{
			id: 'MIOTA',
			summary: '...a revolutionary new, next generation public distributed ledger that utilizes a novel invention, called a “Tangle”, at its core. The Tangle is a new data structure based on a Directed Acyclic Graph. As such it has no Blocks, no Chain and also no Miners.',
			moreinfourl: 'https://iota.readme.io/docs/what-is-iota'
		},
		{
			id: 'XEM',
			summary: '...a peer-to-peer cryptocurrency and blockchain platform launched on March 31, 2015. Written in Java, NEM has a stated goal of a wide distribution model and has introduced new features to blockchain technology such as its proof-of-importance (POI) algorithm, multisignature accounts, encrypted messaging, and an Eigentrust++ reputation system',
			moreinfourl: 'https://en.wikipedia.org/wiki/NEM_(cryptocurrency)'
		},
		{
			id: 'TRX',
			summary: '...a decentralized content entertainment protocol based on blockchain technology.',
			moreinfourl: 'https://tron.network/en.html'
		},
		{
			id: 'USDT',
			summary: '...a cryptocurrency token claimed by its creators to be backed by one dollar for each token issued.',
			moreinfourl: 'https://en.wikipedia.org/wiki/Tether_(cryptocurrency)'
		},
	];

	for (let e = 0; e < cryptoSummary.length; e++) {
		if (cryptoSummary[e].id === cryptoId) {
			if (returndata === 'summary') {
				return cryptoSummary[e].summary;
			}
			if (returndata === 'moreinfourl') {
				return cryptoSummary[e].moreinfourl;
			}
		}
	}
	return 'a summary has not yet been created for this crypto';
}