import { HTTP } from './http';

describe('HTTP', () => {
  it('should create an instance', () => {
    expect(new HTTP({})).toBeTruthy();
  });

  it('Null Json input exception check', () => {
    const http = new HTTP(null);
    expect(http).toBeDefined();
    expect(http).toBeInstanceOf(HTTP);
  });

  it('Undefined Json input exception check', () => {
    const http = new HTTP(undefined);
    expect(http).toBeDefined();
    expect(http).toBeInstanceOf(HTTP);
  });
});
