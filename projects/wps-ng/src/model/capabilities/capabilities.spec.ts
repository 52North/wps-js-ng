import { Capabilities } from './capabilities';

describe('Capabilities', () => {
  it('should create an instance', () => {
    expect(new Capabilities({})).toBeTruthy();
  });

  it('Null Json input exception check', () => {
    const capabilities = new Capabilities(null);
    expect(capabilities).toBeDefined();
    expect(capabilities).toBeInstanceOf(Capabilities);
  });

  it('Undefined Json input exception check', () => {
    const capabilities = new Capabilities(undefined);
    expect(capabilities).toBeDefined();
    expect(capabilities).toBeInstanceOf(Capabilities);
  });
});
