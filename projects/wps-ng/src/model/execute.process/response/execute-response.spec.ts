import { ExecuteResponse } from './execute-response';

describe('ExecuteResponse', () => {
  it('should create an instance', () => {
    expect(new ExecuteResponse(undefined)).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const executeResponse = new ExecuteResponse(null);
    expect(executeResponse).toBeDefined();
    expect(executeResponse).toBeInstanceOf(ExecuteResponse);
  });

  it('Undefined Json input exception check', () => {
    const executeResponse = new ExecuteResponse(undefined);
    expect(executeResponse).toBeDefined();
    expect(executeResponse).toBeInstanceOf(ExecuteResponse);
  });
});
