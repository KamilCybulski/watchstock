/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

export default (data) => {
  const keys = Object.keys(data);

  const pricer = stock => stock.chart.reduce((acc, current) =>
    acc.concat([{
      date: current.date, [stock.company.symbol]: current.close,
    }]), []);

  const prices = keys.map(key => pricer(data[key]));

  const merge = (arr) => {
    if (arr.length === 1) return arr[0];

    let result = [];
    const base = arr[0];
    const iLength = base.length;
    const jLength = arr.length;

    for (let i = 0; i < iLength; i++) {
      let obj = base[i];
      for (let j = 1; j < jLength; j++) {
        obj = Object.assign(obj, arr[j][i]);
      }
      result = result.concat([obj]);
    }
    return result;
  };

  return merge(prices);
};
