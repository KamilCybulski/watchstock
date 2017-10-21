import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

import { addStockSymbolRequest } from '../actions/add-stock-symbol';


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

  handleClick = () => {
    this.props.addStockSymbol(this.state.symbol);
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
            onClick={this.handleClick}
          >
            Send this stuff
          </Button>
        </FormGroup>
      </div>
    );
  }
}

Tester.propTypes = {
  addStockSymbol: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  addStockSymbol: (symbol) => {
    dispatch(addStockSymbolRequest(symbol));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tester);
