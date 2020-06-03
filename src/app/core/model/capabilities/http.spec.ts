import { HTTP } from './http';

describe('HTTP', () => {
  it('should create an instance', () => {
    expect(new HTTP(null)).toBeTruthy();
  });
});
