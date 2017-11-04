import React from 'react';

import TimeControler from '../containers/TimeControler';

const ChartControlls = () => (
  <div className="chart-controls">
    <TimeControler switchTo={7} />
    <TimeControler switchTo={30} />
    <TimeControler switchTo={90} />
    <TimeControler switchTo={365} />
  </div>
);

export default ChartControlls;
