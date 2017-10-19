import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducer from './reducers/reducer';

const initialState = {
  stockSymbols: null,
  prices: null,
};

export default createStore(reducer, initialState, applyMiddleware(logger));
