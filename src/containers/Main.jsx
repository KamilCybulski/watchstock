import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StockChart from './StockChart';
import ErrorMessage from '../components/ErrorMessage';


const Main = ({ showErrorMsg }) => (
  <main className="main">
    {
      showErrorMsg
        ? <ErrorMessage
          msg="Ooops, something went wrong. Please try reloading the page"
        />
        : <StockChart />
    }
  </main>
);

Main.propTypes = {
  showErrorMsg: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  showErrorMsg: state.errors.onStockDataFetch,
});

export default connect(mapStateToProps)(Main);
