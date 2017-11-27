import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';

import StockListController from '../src/containers/StockListController';

const store1 = createStore(s => s, {
  stocks: { a: 1, b: 2, c: 3 },
  timePeriodDisplayed: 365,
  errors: {
    onStockDataFetch: false,
    onStockSymbolSave: false,
    stockDoesntExist: false,
    symbolAlreadyTracked: false,
  },
});

const store2 = createStore(s => s, {
  stocks: { a: 1, b: 2, c: 3 },
  timePeriodDisplayed: 365,
  errors: {
    onStockDataFetch: false,
    onStockSymbolSave: false,
    stockDoesntExist: true,
    symbolAlreadyTracked: false,
  },
});

const store3 = createStore(s => s, {
  stocks: { a: 1, b: 2, c: 3 },
  timePeriodDisplayed: 365,
  errors: {
    onStockDataFetch: false,
    onStockSymbolSave: false,
    stockDoesntExist: false,
    symbolAlreadyTracked: true,
  },
});

describe('StockListController component', () => {
  it('Does not show error messages when it shouldnt', () => {
    const component = mount(<StockListController store={store1} />);

    expect(component.text()).toEqual(expect.stringMatching('Add stock:search'));

    component.unmount();
  });

  it('Shows err msg when displayInvalidSymbolError prop is true', () => {
    const component = mount(<StockListController store={store2} />);

    expect(component.text()).toEqual(expect.stringMatching('Invalid symbol'));

    component.unmount();
  });

  it('Shows err msg when symbolTrackedError prop is true', () => {
    const component = mount(<StockListController store={store3} />);

    expect(component.text()).toEqual(expect.stringMatching('Cannot add the same stock twice'));

    component.unmount();
  });
});
