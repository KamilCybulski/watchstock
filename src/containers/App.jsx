import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { connect } from 'react-redux';

import loadSymbols from '../actions/loadSymbols';


class App extends React.Component {
  componentDidMount = () => {
    const db = firebase.database().ref('/symbols');

    this.symbolsListener = db.on('value', (snap) => {
      this.props.loadSymbols(snap.val());
    });
  }

  /**
   * @returns {object} React element
   */
  render() {
    return (
      <div>
        App
      </div>
    );
  }
}

App.propTypes = {
  loadSymbols: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  loadSymbols: (symbols) => {
    dispatch(loadSymbols(symbols));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

