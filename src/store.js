import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootSaga from './sagas/rootSaga';
import reducer from './reducers/reducer';

const sagaMiddleware = createSagaMiddleware();
const initialState = {
  stocks: null,
  errors: {
    onStockDataFetch: false,
    onStockSymbolSave: false,
    stockDoesntExist: false,
    symbolAlreadyTracked: false,
  },
};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

export default store;
