import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loader from '../components/Loader';
import ChartControlls from './ChartControlls';
import ChartGraph from './ChartGraph';
import StockList from '../containers/StockList';

const StockChart = ({ data }) => (
  <div className="fullwidth-container">
    {!data
      ? <Loader />
      :
      <div className="fullwidth-container">
        <ChartControlls />
        <ChartGraph />
        <StockList />
      </div>}
  </div>
);

StockChart.defaultProps = {
  data: null,
};

StockChart.propTypes = {
  data: PropTypes.objectOf(PropTypes.object),
};

const mapStateToProps = state => ({
  data: state.stocks,
});

export default connect(mapStateToProps)(StockChart);
