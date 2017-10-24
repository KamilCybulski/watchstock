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
    this.props.addStockSymbol(this.state.text);
  }

  /**
   * @returns {object} React Element
   */
  render() {
    return (
      <div className="stock-list__item-container">
        <div className="stock-list__item-controler">
          <FormGroup>
            <ControlLabel>Add stock:</ControlLabel>
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
          <p>
            {this.props.displayInvalidSymbolError
              ? 'Invalid symbol'
              : null}
          </p>
        </div>
      </div>
    );
  }
}

StockListControler.propTypes = {
  addStockSymbol: PropTypes.func.isRequired,
  displayInvalidSymbolError: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  displayInvalidSymbolError: state.errors.stockDoesntExist,
});
const mapDispatchToProps = dispatch => ({
  addStockSymbol: (symbol) => {
    dispatch(addStockSymbolRequest(symbol));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StockListControler);
