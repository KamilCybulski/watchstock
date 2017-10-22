import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StockChart from '../components/StockChart';
import ErrorMessage from '../components/ErrorMessage';


const Main = ({ showErrorMsg }) => (
  <div>
    This is Main
    {
      showErrorMsg
        ? <ErrorMessage
          msg="Ooops, something went wrong. Please try reloading the page"
        />
        : <StockChart />
    }
  </div>
);

Main.propTypes = {
  showErrorMsg: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  showErrorMsg: state.errors.onStockDataFetch,
});

export default connect(mapStateToProps)(Main);
