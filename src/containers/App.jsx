import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { connect } from 'react-redux';

import Main from './Main';

import loadPrices from '../actions/loadPrices';


class App extends React.Component {
  componentDidMount = () => {
    const db = firebase.database().ref('/symbols');

    this.symbolsListener = db.on('value', (snap) => {
      this.props.loadPrices(snap.val());
    });
  }

  componentWillUnmount = () => {
    this.symbolsListener.off();
  }

  /**
   * @returns {object} React element
   */
  render() {
    return (
      <Main />
    );
  }
}

App.propTypes = {
  loadPrices: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  loadPrices: (symbols) => {
    dispatch(loadPrices(symbols));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

