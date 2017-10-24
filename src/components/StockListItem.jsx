import React from 'react';
import PropTypes from 'prop-types';

const StockListItem = ({ name }) => (
  <div className="stock-list__item-container">
    <div className="stock-list__item">
      This is {name} StockListItem
    </div>
  </div>
);

StockListItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default StockListItem;
