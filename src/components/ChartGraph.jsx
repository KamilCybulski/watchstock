import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import transformData from '../lib/transform-data';

const ChartGraph = ({ stocks }) => (
  <div className="chart-graph">
    {JSON.stringify(transformData(stocks))}
  </div>
);

ChartGraph.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  stocks: Object.values(state.stocks),
});

export default connect(mapStateToProps)(ChartGraph);
