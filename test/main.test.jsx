import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Main from '../src/containers/Main';
import StockChart from '../src/containers/StockChart';
import ErrorMessage from '../src/components/ErrorMessage';

const storeNoError = createStore(s => s, {
  stocks: null,
  errors: {
    onStockDataFetch: false,
  },
});

const storeWithError = createStore(s => s, {
  stocks: null,
  errors: {
    onStockDataFetch: true,
  },
});

const MainWithError = mount(<Provider store={storeWithError}><Main /></Provider>);
const MainNoError = mount(<Provider store={storeNoError}><Main /></Provider>);

describe('Main component', () => {
  it('Renders error message if showErrorMessage prop is true', () => {
    expect(MainWithError.find(ErrorMessage)).toHaveLength(1);
  });

  it('Renders StockChart if showErrorMessage prop is false', () => {
    expect(MainNoError.find(StockChart)).toHaveLength(1);
  });
});
