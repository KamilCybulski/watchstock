import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import StockList from '../src/containers/StockList';
import Card from '../src/components/Card';
import StockListController from '../src/containers/StockListController';

const store = createStore(s => s, {
  stocks: {
    AAPL: {
      company: {
        symbol: 'AAPL',
        companyName: 'Apple',
        sector: 'rubbish',
        industry: 'marketing',
      },
    },
    GOOG: {
      company: {
        symbol: 'GOOG',
        companyName: 'Alphabet',
        sector: 'web',
        industry: 'search engine',
      },
    },
    MSFT: {
      company: {
        symbol: 'MSFT',
        companyName: 'Microsoft',
        sector: 'stuff',
        industry: 'stuffy',
      },
    },
  },
  errors: {
    stockDoesntExist: false,
    symbolAlreadyTracked: false,
  },
});

const stockList = mount(<Provider store={store}><StockList /></Provider>);

describe('StockList component', () => {
  it('Renders correct amount of Cards', () => {
    expect(stockList.find(Card)).toHaveLength(3);
  });

  it('Passes correct props to Cards', () => {
    const cards = stockList.find(Card);
    const firstCard = cards.first();
    const secondCard = cards.at(1);
    const thirdCard = cards.at(2);

    expect(firstCard.props()).toEqual({
      symbol: 'AAPL',
      name: 'Apple',
      sector: 'rubbish',
      industry: 'marketing',
    });

    expect(secondCard.props()).toEqual({
      symbol: 'GOOG',
      name: 'Alphabet',
      sector: 'web',
      industry: 'search engine',
    });

    expect(thirdCard.props()).toEqual({
      symbol: 'MSFT',
      name: 'Microsoft',
      sector: 'stuff',
      industry: 'stuffy',
    });
  });

  it('Renders one StockListController', () => {
    expect(stockList.find(StockListController)).toHaveLength(1);
  });
});
