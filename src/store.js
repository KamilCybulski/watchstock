import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/rootSaga';
import reducer from './reducers/reducer';

const sagaMiddleware = createSagaMiddleware();
const initialState = {
  stocks: null,
  timePeriodDisplayed: 365,
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
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
