import { Format } from './format';

describe('Format', () => {
  it('should create an instance', () => {
    expect(new Format(undefined)).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const format = new Format(null);
    expect(format).toBeDefined();
    expect(format).toBeInstanceOf(Format);
  });

  it('Undefined Json input exception check', () => {
    const format = new Format(undefined);
    expect(format).toBeDefined();
    expect(format).toBeInstanceOf(Format);
  });
});
