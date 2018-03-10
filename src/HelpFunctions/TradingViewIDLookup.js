export default function TradingViewIDLookup(cryptoSymbol) {
	const TradingViewCryptoIDDatabase = [
		{ cryptoSymbol: 'BTC',  TradingViewCryptoID: 'COINBASE:BTCUSD' },
		{ cryptoSymbol: 'ETH',  TradingViewCryptoID: 'COINBASE:ETHUSD'  },
		{ cryptoSymbol: 'XRP',  TradingViewCryptoID: 'BITFINEX:XRPUSD'  },
		{ cryptoSymbol: 'BCH',  TradingViewCryptoID: 'BITTREX:BCCUSDT'  },
		{ cryptoSymbol: 'LTC',  TradingViewCryptoID: 'COINBASE:LTCUSD'  },
		{ cryptoSymbol: 'NEO',  TradingViewCryptoID: 'BINANCE:NEOUSDT'  },
		{ cryptoSymbol: 'XLM',  TradingViewCryptoID: 'KRAKEN:XLMUSD'    },
		{ cryptoSymbol: 'ADA',  TradingViewCryptoID: 'BITTREX:ADAUSDT'  },
		{ cryptoSymbol: 'XMR',  TradingViewCryptoID: 'BITFINEX:XMRUSD'  },
		{ cryptoSymbol: 'EOS',  TradingViewCryptoID: 'BITFINEX:EOSUSD'  },
		{ cryptoSymbol: 'DASH', TradingViewCryptoID: 'BITTREX:DASHUSD'  },
		{ cryptoSymbol: 'IOTA', TradingViewCryptoID: 'BITFINEX:IOTUSD'  },
		{ cryptoSymbol: 'XEM',  TradingViewCryptoID: 'POLONIEX:XEMUSD'  },
		{ cryptoSymbol: 'TRX',  TradingViewCryptoID: 'BINANCE:TRONUSD'  },
		{ cryptoSymbol: 'ETC',  TradingViewCryptoID: 'BITFINEX:ETCUSD'  },
		{ cryptoSymbol: 'USDT', TradingViewCryptoID: 'KRAKEN:USDTUSD'   },
		{ cryptoSymbol: 'VEN',  TradingViewCryptoID: 'BINANCE:VENUSD'   },
		{ cryptoSymbol: 'NANO', TradingViewCryptoID: 'BINANCE:NANOBTC'  }, //BTC
		{ cryptoSymbol: 'LSK',  TradingViewCryptoID: 'BINANCE:LSKUSD'   },
		{ cryptoSymbol: 'OMG',  TradingViewCryptoID: 'BINANCE:OMGUSD'   },
		{ cryptoSymbol: 'BTG',  TradingViewCryptoID: 'BITFINEX:BTGUSD'  },
		{ cryptoSymbol: 'QTUM', TradingViewCryptoID: 'BINANCE:QTUMUSD'  },
		{ cryptoSymbol: 'ZEC',  TradingViewCryptoID: 'BITTREX:ZECUSD'   },
		{ cryptoSymbol: 'ICX',  TradingViewCryptoID: 'BINANCE:ICXUSD'   },
		{ cryptoSymbol: 'BNB',  TradingViewCryptoID: 'BINANCE:BNBUSD'   }
	];
	for(let e = 0; e<TradingViewCryptoIDDatabase.length; e++) {
		if(TradingViewCryptoIDDatabase[e].cryptoSymbol === cryptoSymbol) {
			return TradingViewCryptoIDDatabase[e].TradingViewCryptoID;
		}
	}
}