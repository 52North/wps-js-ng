import { Address } from './address';

describe('Address', () => {
  it('should create an instance', () => {
    expect(new Address({})).toBeTruthy();
  });

  it('Null Json input exception check', () => {
    const address = new Address(null);
    expect(address).toBeDefined();
    expect(address).toBeInstanceOf(Address);
  });

  it('Undefined Json input exception check', () => {
    const address = new Address(undefined);
    expect(address).toBeDefined();
    expect(address).toBeInstanceOf(Address);
  });
});
