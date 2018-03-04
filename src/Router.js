import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import IndividualCrypto from './individualCryptoContainer/IndividualCryptoContainer';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App}/>
			<Route path="/:ID" component={IndividualCrypto} />
		</Switch>
	</BrowserRouter>
);

export default Router;
