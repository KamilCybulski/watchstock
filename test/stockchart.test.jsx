import React from 'react';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import StockChart from '../src/containers/StockChart';
import Loader from '../src/components/Loader';
import ChartControlls from '../src/components/ChartControlls';
import ChartGraph from '../src/components/ChartGraph';
import StockList from '../src/containers/StockList';

const store1 = createStore(s => s, {
  timePeriodDisplayed: 365,
  errors: {
    onStockDataFetch: false,
    onStockSymbolSave: false,
    stockDoesntExist: false,
    symbolAlreadyTracked: false,
  },
  stocks: {
    AAPL: {
      company: {
        symbol: 'AAPL',
        companyName: 'Apple Inc.',
        exchange: 'Nasdaq Global Select',
        industry: 'Computer Hardware',
        website: 'http://www.apple.com',
        sector: 'Technology',
      },
      chart: [
        {
          date: '2016-12-07',
          open: 109.26,
          high: 111.19,
          low: 109.16,
          close: 111.03,
        },
        {
          date: '2016-12-08',
          open: 110.86,
          high: 112.43,
          low: 110.6,
          close: 112.12,
        },
        {
          date: '2016-12-09',
          open: 112.31,
          high: 114.7,
          low: 112.31,
          close: 113.95,
        },
        {
          date: '2016-12-12',
          open: 113.29,
          high: 115,
          low: 112.49,
          close: 113.3,
        },
        {
          date: '2016-12-13',
          open: 113.84,
          high: 115.92,
          low: 113.75,
          close: 115.19,
        },
        {
          date: '2016-12-14',
          open: 115.04,
          high: 116.2,
          low: 114.98,
          close: 115.19,
        },
        {
          date: '2016-12-15',
          open: 115.38,
          high: 116.73,
          low: 115.23,
          close: 115.82,
        },
        {
          date: '2016-12-16',
          open: 116.47,
          high: 116.5,
          low: 115.645,
          close: 115.97,
        },
      ],
    },
  },
});

const store2 = createStore(s => s, {
  stocks: null,
});

describe('StockChart component', () => {
  it('Renders Loader if no data', () => {
    const component = mount(<Provider store={store2}><StockChart /></Provider>);

    expect(component.find(Loader)).toHaveLength(1);

    component.unmount();
  });

  it('Renders Chart if there is some data', () => {
    const component = mount(<Provider store={store1}><StockChart /></Provider>);

    expect(component.find(ChartControlls)).toHaveLength(1);
    expect(component.find(ChartGraph)).toHaveLength(1);
    expect(component.find(StockList)).toHaveLength(1);

    component.unmount();
  });
});
