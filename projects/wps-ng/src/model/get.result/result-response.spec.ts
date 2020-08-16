import { ResultResponse } from './result-response';

describe('ResultResponseDocument', () => {
  it('should create an instance', () => {
    expect(new ResultResponse(undefined)).toBeTruthy();
  });

  it('Null Json input exception check', () => {
    const status = new ResultResponse(null);
    expect(status).toBeDefined();
    expect(status).toBeInstanceOf(ResultResponse);
  });

  it('Undefined Json input exception check', () => {
    const status = new ResultResponse(undefined);
    expect(status).toBeDefined();
    expect(status).toBeInstanceOf(ResultResponse);
  });

});
