import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StockListControler from './StockListController';
import Card from '../components/Card';


const StockList = ({ data }) => (
  <div className="stock-list">
    {Object.values(data).map(stock => (
      <Card
        key={stock.company.symbol}
        symbol={stock.company.symbol}
        name={stock.company.companyName}
        sector={stock.company.sector}
        industry={stock.company.industry}
      />
    ))}
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
