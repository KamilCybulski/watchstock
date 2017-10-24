import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { connect } from 'react-redux';

import Main from './Main';
import Footer from '../components/Footer';

import { fetchStockDataRequest } from '../actions/fetch-stock-data';

class App extends React.Component {
  componentDidMount = () => {
    const db = firebase.database().ref('/symbols');

    this.symbolsListener = db.on('value', (snap) => {
      const symbols = Object.values(snap.val());
      this.props.fetchStockData(symbols);
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
      <div className="background">
        <Main />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  fetchStockData: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  fetchStockData: (symbols) => {
    dispatch(fetchStockDataRequest(symbols));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

