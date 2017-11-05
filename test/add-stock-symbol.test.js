import axios from 'axios';
import firebase from 'firebase';
import { call, put } from 'redux-saga/effects';
import firebaseTestConfig from '../config/firebaseTestConfig';
import { addStockSymbol } from '../src/sagas/add-stock-symbol';
import {
  clearAllErrors,
  symbolTrackedError } from '../src/actions/error-actions';
import {
  addStockSymbolRequest,
  addStockSymbolSuccess,
  addStockSymbolFailureDB,
  addStockSymbolFailureInvalid } from '../src/actions/add-stock-symbol';

firebase.initializeApp(firebaseTestConfig);


describe('Action creators work as intended', () => {
  it('Request action', () => {
    expect(addStockSymbolRequest('goog', ['FB', 'MMM'])).toEqual({
      type: 'ADD_STOCK_SYMBOL_REQUEST',
      symbol: 'goog',
      currentSymbols: ['FB', 'MMM'],
    });
  });

  it('Success action', () => {
    expect(addStockSymbolSuccess()).toEqual(expect.objectContaining({
      type: 'ADD_STOCK_SYMBOL_SUCCESS',
    }));
  });

  it('Failure db error action', () => {
    expect(addStockSymbolFailureDB()).toEqual(expect.objectContaining({
      type: 'ADD_STOCK_SYMBOL_FAILURE_DB_ERROR',
    }));
  });

  it('Failure invalid symbol action', () => {
    expect(addStockSymbolFailureInvalid()).toEqual(expect.objectContaining({
      type: 'ADD_STOCK_SYMBOL_FAILURE_SYMBOL_INVALID',
    }));
  });

  it('CLEAR_ALL_ERRORS action', () => {
    expect(clearAllErrors()).toEqual({
      type: 'CLEAR_ALL_ERRORS',
    });
  });

  it('SYMBOL_TRACKED_ERROR action', () => {
    expect(symbolTrackedError()).toEqual({
      type: 'SYMBOL_TRACKED_ERROR',
    });
  });
});


describe('addStockSymbol saga with valid, non-tracked symbol', () => {
  const action = addStockSymbolRequest('aapl', ['goog', 'fb']);
  const gen = addStockSymbol(action);

  it('Clears all errors', () => {
    expect(gen.next().value).toEqual(put(clearAllErrors()));
  });

  it('Checks if stock symbol exists', () => {
    const url = 'https://api.iextrading.com/1.0/stock/AAPL/price';
    expect(gen.next().value).toEqual(call(axios.get, url));
  });

  it('Creates new entry in firebase db', () => {
    expect(gen.next().value).toEqual(expect.objectContaining({
      CALL: expect.objectContaining({
        args: expect.arrayContaining(['AAPL']),
        context: expect.stringMatching('https://test-project-159e8.firebaseio.com/symbols'),
        fn: expect.any(Function),
      }),
    }));
  });

  it('Dispatches a success action', () => {
    expect(gen.next().value).toEqual(put(addStockSymbolSuccess()));
  });
});


describe('addStockSymbol saga with an invalid, non-tracked symbol', () => {
  const action = addStockSymbolRequest('AAPLERFEW', ['AAPL', 'GOOG']);
  const gen = addStockSymbol(action);

  it('Clears all errors', () => {
    expect(gen.next().value).toEqual(put(clearAllErrors()));
  });

  it('Checks if stock symbol exists', () => {
    const url = 'https://api.iextrading.com/1.0/stock/AAPLERFEW/price';
    expect(gen.next().value).toEqual(call(axios.get, url));
  });

  it('Dispatches a failure action (invalid symbol)', () => {
    expect(gen.throw().value).toEqual(put(addStockSymbolFailureInvalid()));
  });
});


describe('addStockSaga with a valid, already tracked symbol', () => {
  const action = addStockSymbolRequest('AAPL', ['AAPL', 'GOOG']);
  const gen = addStockSymbol(action);

  it('Clears all errors', () => {
    expect(gen.next().value).toEqual(put(clearAllErrors()));
  });

  it('Dispatches a symbolTrackedError action', () => {
    expect(gen.next().value).toEqual(put(symbolTrackedError()));
  });
});

