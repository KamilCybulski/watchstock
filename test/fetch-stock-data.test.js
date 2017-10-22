import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { fetchStockData } from '../src/sagas/fetch-stock-data';
import {
  fetchStockDataRequest,
  fetchStockDataSuccess,
  fetchStockDataFailure } from '../src/actions/fetch-stock-data';


describe('Action creators work as intended', () => {
  it('Request action', () => {
    expect(fetchStockDataRequest(['aapl', 'goog'])).toEqual({
      type: 'FETCH_STOCK_DATA_REQUEST',
      payload: expect.arrayContaining(['aapl', 'goog']),
    });
  });

  it('Success action', () => {
    expect(fetchStockDataSuccess('just some data')).toEqual({
      type: 'FETCH_STOCK_DATA_SUCCESS',
      payload: 'just some data',
    });
  });

  it('Failure action', () => {
    expect(fetchStockDataFailure('Error dang!')).toEqual({
      type: 'FETCH_STOCK_DATA_FAILURE',
      payload: 'Error dang!',
    });
  });
});


describe('fetchStockData saga success', () => {
  const action = fetchStockDataRequest(['aapl', 'goog']);
  const gen = fetchStockData(action);

  it('Calls iex api to get stock data', () => {
    const url = 'https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,goog&types=price';

    expect(gen.next().value).toEqual(call(axios.get, url));
  });

  it('Dispatches a success action', () => {
    const response = {
      data: 'heh',
    };

    expect(gen.next(response).value).toEqual(put(fetchStockDataSuccess('heh')));
  });
});


describe('fetchStockData saga failure', () => {
  const action = fetchStockDataRequest(['aapl', 'goog']);
  const gen = fetchStockData(action);

  // Quickly call next, cause calling the iex api is already tested
  gen.next();

  it('Dispatches a failure action', () => {
    expect(gen.throw(new Error('just error')).value).toEqual(put(fetchStockDataFailure('just error')));
  });
});
