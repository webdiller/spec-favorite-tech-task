import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './reducers/_index';

const initState = {};
const middleware = [thunk];

const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
