import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormGroup, FormControl, ControlLabel, Button, InputGroup } from 'react-bootstrap';

import { addStockSymbolRequest } from '../actions/add-stock-symbol';

class StockListControler extends React.Component {
  /**
   * @constructor
   * @param {object} props React props
   */
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  addStock = () => {
    this.props.addStockSymbol(this.state.text, this.props.stocks);
  }

  /**
   * @returns {object} React Element
   */
  render() {
    return (
      <div className="stock-list__item-container">
        <div className="stock-list__controler">
          <FormGroup>
            <ControlLabel className="stock-list__controler__label">
              Add stock:
            </ControlLabel>
            <InputGroup>
              <FormControl
                type="text"
                value={this.state.text}
                placeholder="Stock's symbol"
                onChange={this.handleChange}
              />
              <InputGroup.Button>
                <Button bsStyle="success" onClick={this.addStock}>
                  search
                </Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
          <p className="stock-list__controler__warning">
            {this.props.displayInvalidSymbolError
              ? 'Invalid symbol'
              : null}
            {this.props.symbolTrackedError
              ? 'Cannot add the same stock twice'
              : null}
          </p>
        </div>
      </div>
    );
  }
}

StockListControler.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.string).isRequired,
  addStockSymbol: PropTypes.func.isRequired,
  displayInvalidSymbolError: PropTypes.bool.isRequired,
  symbolTrackedError: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  stocks: Object.keys(state.stocks),
  displayInvalidSymbolError: state.errors.stockDoesntExist,
  symbolTrackedError: state.errors.symbolAlreadyTracked,
});
const mapDispatchToProps = dispatch => ({
  addStockSymbol: (symbol, currentSymbols) => {
    dispatch(addStockSymbolRequest(symbol, currentSymbols));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StockListControler);
