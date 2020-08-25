import { ResultResponse } from './result-response';

describe('ResultResponseDocument', () => {
  it('should create an instance', () => {
    expect(new ResultResponse(undefined)).toBeTruthy();
  });

  it('Null Json input exception check', () => {
    const resultResponse = new ResultResponse(null);
    expect(resultResponse).toBeDefined();
    expect(resultResponse).toBeInstanceOf(ResultResponse);
  });

  it('Undefined Json input exception check', () => {
    const resultResponse = new ResultResponse(undefined);
    expect(resultResponse).toBeDefined();
    expect(resultResponse).toBeInstanceOf(ResultResponse);
  });

});
