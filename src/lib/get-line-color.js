/**
 * getLineColor
 * @param {string} name String to generate color from
 * @description Return a different color based on given string
 * @returns {string} Hexadecimal color string
 */
export default (name) => {
  const createHash = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  };

  const createColor = (hash) => {
    let color = '#';
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xFF;
      color += `00${value.toString(16)}`.substr(-2);
    }
    return color;
  };

  return createColor(createHash(name));
};
