import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

import { addStockSymbolRequest } from '../actions/add-stock-symbol';
import { removeStockSymbolRequest } from '../actions/remove-stock-symbol';


class Tester extends React.Component {
  /**
   * @constructor
   * @param {object} props props
   */
  constructor(props) {
    super(props);
    this.state = {
      symbol: '',
    };
  }

  handleChange = (e) => {
    this.setState({ symbol: e.target.value });
  }

  addStock = () => {
    this.props.addStockSymbol(this.state.symbol);
  }

  removeStock = () => {
    this.props.removeStockSymbol(this.state.symbol);
  }


  /**
   * @returns {object} React element
   */
  render() {
    return (
      <div>
        <FormGroup style={{ marginTop: '50px', marginLeft: '100px' }}>
          <ControlLabel>Current is: {this.state.current}</ControlLabel>
          <FormControl
            type="text"
            value={this.state.symbol}
            placeholder="Your message"
            onChange={this.handleChange}
            style={{ width: '500px', marginTop: '20px', marginBottom: '20px' }}
          />
          <Button
            bsStyle="primary"
            onClick={this.addStock}
          >
            Send this stuff
          </Button>
          <Button
            bsStyle="danger"
            onClick={this.removeStock}
          >
            Remove this stuff.
          </Button>
        </FormGroup>
      </div>
    );
  }
}

Tester.propTypes = {
  addStockSymbol: PropTypes.func.isRequired,
  removeStockSymbol: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  addStockSymbol: (symbol) => {
    dispatch(addStockSymbolRequest(symbol));
  },
  removeStockSymbol: (symbol) => {
    dispatch(removeStockSymbolRequest(symbol));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tester);
