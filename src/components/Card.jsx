import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Glyphicon } from 'react-bootstrap';

import { removeStockSymbolRequest } from '../actions/remove-stock-symbol';

const Card = ({ symbol, name, sector, industry, remove }) => (
  <div className="stock-list__item-container">
    <div className="card">
      <div className="card__header">
        <h1 className="card__title">{symbol}</h1>
        <Button
          bsStyle="danger"
          onClick={() => remove(symbol)}
        >
          <Glyphicon glyph="remove" />
        </Button>
      </div>
      <h4 className="card__subtitle">{name}</h4>
      <p className="card__description">{`${sector}, ${industry}`}</p>
    </div>
  </div>
);

Card.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sector: PropTypes.string.isRequired,
  industry: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  remove: (symbol) => {
    dispatch(removeStockSymbolRequest(symbol));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
