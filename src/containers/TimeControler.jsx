import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import changePeriodDisplayed from '../actions/change-period-displayed';

const TimeControler = ({ switchTo, currentPeriod, changePeriod }) => (
  <button
    onClick={() => {
      if (switchTo !== currentPeriod) {
        changePeriod(switchTo);
      }
    }}
  >
    {
      switchTo === 365
        ? 'Last year'
        : `Last ${switchTo} days`
    }
  </button>
);

TimeControler.propTypes = {
  switchTo: PropTypes.number.isRequired,
  currentPeriod: PropTypes.number.isRequired,
  changePeriod: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentPeriod: state.timePeriodDisplayed,
});

const mapDispatchToProps = dispatch => ({
  changePeriod(num) {
    dispatch(changePeriodDisplayed(num));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeControler);
