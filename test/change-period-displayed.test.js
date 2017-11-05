import changePeriodDisplayed from '../src/actions/change-period-displayed';

describe('Action creators work as intended', () => {
  it('CHANGE_TIME_PERIOD_DISPLAYED action', () => {
    expect(changePeriodDisplayed(7)).toEqual({
      type: 'CHANGE_TIME_PERIOD_DISPLAYED',
      payload: 7,
    });
  });
});
