import { Operation } from './operation';

describe('Operation', () => {
  it('should create an instance', () => {
    expect(new Operation({})).toBeTruthy();
  });

  it('Null Json input exception check', () => {
    const operation = new Operation(null);
    expect(operation).toBeDefined();
    expect(operation).toBeInstanceOf(Operation);
  });

  it('Undefined Json input exception check', () => {
    const operation = new Operation(undefined);
    expect(operation).toBeDefined();
    expect(operation).toBeInstanceOf(Operation);
  });
});
