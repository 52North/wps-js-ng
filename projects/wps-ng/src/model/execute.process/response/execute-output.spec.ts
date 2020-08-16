import {ExecuteOutput} from './execute-output';

describe('ExecuteOutput', () => {
  it('should create an instance', () => {
    expect(new ExecuteOutput({})).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const address = new ExecuteOutput(null);
    expect(address).toBeDefined();
    expect(address).toBeInstanceOf(ExecuteOutput);
  });

  it('Undefined Json input exception check', () => {
    const address = new ExecuteOutput(undefined);
    expect(address).toBeDefined();
    expect(address).toBeInstanceOf(ExecuteOutput);
  });
});
