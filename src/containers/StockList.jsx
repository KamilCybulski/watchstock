import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StockListControler from './StockListController';
import StockListItem from '../components/StockListItem';


const StockList = ({ data }) => (
  <div>
    {Object.entries(data).map(stock => (
      <StockListItem name={stock[0]} />
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
