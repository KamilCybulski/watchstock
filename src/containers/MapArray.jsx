/* eslint-disable react/no-array-index-key */
// Indices are used as keys here only if the user does not provide unique key

import React from 'react';
import PropTypes from 'prop-types';


class MapArray extends React.Component {
  shouldComponentUpdate = nextProps =>
    (nextProps.from !== this.props.from)

  /**
   * @returns {object} React Element
   */
  render() {
    const { from, children, map } = this.props;
    const child = React.Children.only(children);
    const mapped = from.map((item, key) => (
      React.cloneElement(child, { key, ...map(item) })));

    return mapped;
  }
}

MapArray.defaultProps = {
  map: e => e,
};

MapArray.propTypes = {
  from: PropTypes.arrayOf(PropTypes.any).isRequired,
  children: PropTypes.element.isRequired,
  map: PropTypes.func,
};

export default MapArray;
