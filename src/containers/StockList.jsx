import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StockListControler from './StockListController';
import Card from '../components/Card';
import MapArray from './MapArray';

const map = stock => ({
  key: stock.company.symbol,
  symbol: stock.company.symbol,
  name: stock.company.companyName,
  sector: stock.company.sector,
  industry: stock.company.industry,
});

const StockList = ({ data }) => (
  <div className="stock-list">
    <MapArray from={Object.values(data)} map={map}>
      <Card />
    </MapArray>
    <StockListControler />
  </div>
);

StockList.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  data: state.stocks,
});

export default connect(mapStateToProps)(StockList);
