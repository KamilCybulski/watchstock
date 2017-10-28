/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

/**
 * transformData
 * @param {object} data Data fetched from iex API
 * Transform the data into an array of objects with following format:
 * {date: "27-09-2017", AAPL: 170.63, GOOG: 1019.27}
 * @returns {array} Array of object with specified format.
 */
export default (data) => {
  const keys = Object.keys(data);
  if (keys.length === 0) return [];

  const pricer = stock => stock.chart.reduce((acc, current) =>
    acc.concat([{
      date: current.date, [stock.company.symbol]: current.close,
    }]), []);

  const prices = keys.map(key => pricer(data[key]));

  const merge = (arr) => {
    if (arr.length === 1) return arr[0];
    let result = [];
    const base = arr[0];

    while (base.length > 0) {
      let entry = {};
      arr.forEach((a) => {
        entry = Object.assign(entry, a.shift());
      });
      result = result.concat([entry]);
    }

    return result;
  };

  return merge(prices);
};
