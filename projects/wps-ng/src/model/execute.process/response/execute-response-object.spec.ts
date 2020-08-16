import { ExecuteResponseObject } from './execute-response-object';

describe('ExecuteResponseObject', () => {
  it('should create an instance', () => {
    expect(new ExecuteResponseObject({})).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const executeResponseObject = new ExecuteResponseObject(null);
    expect(executeResponseObject).toBeDefined();
    expect(executeResponseObject).toBeInstanceOf(ExecuteResponseObject);
  });

  it('Undefined Json input exception check', () => {
    const executeResponseObject = new ExecuteResponseObject(undefined);
    expect(executeResponseObject).toBeDefined();
    expect(executeResponseObject
    ).toBeInstanceOf(ExecuteResponseObject);
  });
});
