import { Input } from './input';

describe('Input', () => {
  it('should create an instance', () => {
    expect(new Input(undefined)).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const input = new Input(null);
    expect(input).toBeDefined();
    expect(input).toBeInstanceOf(Input);
  });

  it('Undefined Json input exception check', () => {
    const input = new Input(undefined);
    expect(input).toBeDefined();
    expect(input).toBeInstanceOf(Input);
  });
});
