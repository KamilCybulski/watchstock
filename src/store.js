import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import reducer from './reducers/reducer';

const initialState = {
  prices: undefined,
  error: undefined,
};

export default createStore(
  reducer,
  initialState,
  applyMiddleware(logger, promise()),
);
