import firebase from 'firebase';
import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';
import { clearAllErrors, symbolTrackedError } from '../actions/error-actions';
import {
  addStockSymbolSuccess,
  addStockSymbolFailureDB,
  addStockSymbolFailureInvalid } from '../actions/add-stock-symbol';


/**
 * addStockSymbol
 * @param {object} action ADD_STOCK_SYMBOL_REQUEST action with symbol {string}
 *                        to be added, and currentSymbols {array of symbols}
 *                        tracked by the app.
 * Add new stock symbol to the database
 * @returns {object} Iterator
 */
export function* addStockSymbol(action) {
  yield put(clearAllErrors());
  const symbol = action.symbol.toUpperCase();
  if (action.currentSymbols.includes(symbol)) {
    yield put(symbolTrackedError());
  } else {
    try {
      const url = `https://api.iextrading.com/1.0/stock/${symbol}/price`;
      yield call(axios.get, url);

      try {
        const newRef = firebase.database().ref('/symbols').push();
        yield call([newRef, newRef.set], symbol);
        yield put(addStockSymbolSuccess());
      } catch (e) {
        yield put(addStockSymbolFailureDB());
      }
    } catch (e) {
      yield put(addStockSymbolFailureInvalid());
    }
  }
}

/**
 * watchAddStockSymbol
 * Watch for ADD_STOCK_SYMBOL_REQUEST action and call addStockSymbol function.
 * @returns {object} Iterator
 */
export default function* watchAddStockSymbol() {
  yield takeEvery('ADD_STOCK_SYMBOL_REQUEST', addStockSymbol);
}
