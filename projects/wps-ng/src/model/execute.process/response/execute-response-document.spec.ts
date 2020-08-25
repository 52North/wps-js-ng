import { ExecuteResponseDocument } from './execute-response-document';

describe('ExecuteResponseDocument', () => {
  it('should create an instance', () => {
    expect(new ExecuteResponseDocument(undefined)).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const executeResponseDocument = new ExecuteResponseDocument(null);
    expect(executeResponseDocument).toBeDefined();
    expect(executeResponseDocument).toBeInstanceOf(ExecuteResponseDocument);
  });

  it('Undefined Json input exception check', () => {
    const executeResponseDocument = new ExecuteResponseDocument(undefined);
    expect(executeResponseDocument).toBeDefined();
    expect(executeResponseDocument).toBeInstanceOf(ExecuteResponseDocument);
  });
});
