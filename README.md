# Cryptocurrency Filter and Summerizer

This is my first react project.

I get the homepage data from two sources, market data is from the coinmarketcap api and the icon logos are from the chasing-coins.com api.

On the page for each crypto, the TradingView chart is via an NPM package, the summary data is manually collected by me and stored in a seperate js file, and the event data is obtained from Kryptocal.com and stored in a very large json file. I clean the data up with some functions and then display the first 5 events.


## Features
### Homepage:
- Sort cryptocurrencies by Market Cap, Price, 1-hour Percent Change, 24-Hour Percent Change, 7-Day Percent Change or 24-Hour Volume
- Filter cryptocurrencies by same attributes, returning only those where the data is above x, below y or between x and y
- Combine multiple filters together to further refine your search

### Individual Crypto Pages:
- TradingView.com chart locked to that symbol
- short descrption of the cryptocurrency with link for more info
- list of upcoming events related to that cryptocurrency, with links to view original source info, as well as event on Kryptocal.com
- button to add an event on to Kryptocal.com


## To-Do
1. add more summary data
2. add individual buttons on homepage that link directly to a crypto's chart, events or data

