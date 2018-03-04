import {createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the rooter reducers
import rootReducer from './reducers/index';



//create object for default data
const defaultState = {
	filters,
	sortType
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory);

export default store;

