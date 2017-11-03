import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

import transformData from '../lib/transform-data';
import getLineColor from '../lib/get-line-color';
import takeNLast from '../lib/takeNLast';

const ChartGraph = ({ data, stocks, timePeriodDisplayed }) => (
  <div className="chart-graph">
    <ResponsiveContainer width="99%" height={320} debounce={1}>
      <LineChart
        data={takeNLast(data, timePeriodDisplayed)}
      >
        <YAxis
          axisLine={false}
          mirror
          tickSize={0}
          orientation="right"
          tick={{ transform: 'translate(0, -11)' }}
          padding={{ top: 55 }}
        />
        <XAxis
          dataKey="date"
          axisLine={false}
          tick={{ fontSize: '10px', transform: 'translate(0, 10)' }}
          padding={{ top: 10 }}
        />
        <CartesianGrid vertical={false} />
        <Tooltip
          labelStyle={{ color: '#000', fontSize: '14px', marginBottom: '5px' }}
        />
        {stocks.map((stock, i) => (
          <Line
            key={stock}
            type="monotone"
            dataKey={stock}
            dot={false}
            strokeWidth="2"
            stroke={i > 12 ? undefined : getLineColor(i)}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  </div>
);

ChartGraph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  stocks: PropTypes.arrayOf(PropTypes.string).isRequired,
  timePeriodDisplayed: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  data: transformData(Object.values(state.stocks)),
  stocks: Object.keys(state.stocks),
  timePeriodDisplayed: state.timePeriodDisplayed,
});

export default connect(mapStateToProps)(ChartGraph);
