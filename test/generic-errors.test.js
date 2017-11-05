import { clearAllErrors, symbolTrackedError } from '../src/actions/error-actions';

describe('Action creators work as intended', () => {
  it('CLEAR_ALL_ERRORS action', () => {
    expect(clearAllErrors()).toEqual({
      type: 'CLEAR_ALL_ERRORS',
    });
  });


  it('SYMBOL_TRACKED_ERROR action', () => {
    expect(symbolTrackedError()).toEqual({
      type: 'SYMBOL_TRACKED_ERROR',
    });
  });
});
