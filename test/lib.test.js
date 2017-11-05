import getLineColor from '../src/lib/get-line-color';
import takeNLast from '../src/lib/takeNLast';
import transformData from '../src/lib/transform-data';


describe('getLineColor', () => {
  it('When passed number [0, 12] returns a hex color string', () => {
    expect(getLineColor(2)).toEqual(expect.stringMatching(/#[a-zA-Z0-9]{6}/));
  });
});

describe('takeNLast', () => {
  it('Returns last n elemenets of a passed array', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(takeNLast(arr, 3)).toEqual(expect.arrayContaining([4, 5, 6]));
  });

  it('Returns whole array if number passed is 365', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(takeNLast(arr, 365)).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
  });
});

describe('transformData', () => {
  const data = {
    AAPL: {
      company: {
        symbol: 'AAPL',
      },
      chart: [
        {
          date: '2017-10-02',
          close: 100,
        },
        {
          date: '2017-10-03',
          close: 90,
        },
        {
          date: '2017-10-04',
          close: 80,
        },
        {
          date: '2017-10-05',
          close: 10,
        },
      ],
    },
    GOOG: {
      company: {
        symbol: 'GOOG',
      },
      chart: [
        {
          date: '2017-10-02',
          close: 800,
        },
        {
          date: '2017-10-03',
          close: 850,
        },
        {
          date: '2017-10-04',
          close: 900,
        },
        {
          date: '2017-10-05',
          close: 950,
        },
      ],
    },
  };

  it('Just works as intended', () => {
    const result = transformData(data);
    expect(result).toHaveLength(4);
    expect(result[0]).toEqual({
      date: '2017-10-02',
      AAPL: 100,
      GOOG: 800,
    });
    expect(result[3]).toEqual({
      date: '2017-10-05',
      AAPL: 10,
      GOOG: 950,
    });
  });
});
