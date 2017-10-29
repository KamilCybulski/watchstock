/**
 * getLineColor
 * @param {number} i Array index (NOTE: should not be bigger then 12)
 * @description Return a different color based on given number
 * @returns {string} Hexadecimal color string
 */
export default (i) => {
  const colors = [
    '#8884d8',
    '#82ca9d',
    '#e91e63',
    '#9c27b0',
    '#ffff00',
    '#81d4fa',
    '#c62828',
    '#ff9100',
    '#64ffda',
    '#76ff03',
    '#fafafa',
    '#f48fb1',
  ];

  return colors[i];
};
