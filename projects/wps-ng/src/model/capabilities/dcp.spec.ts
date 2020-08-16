import { DCP } from './dcp';

describe('DCP', () => {
  it('should create an instance', () => {
    expect(new DCP({})).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const dcp = new DCP(null);
    expect(dcp).toBeDefined();
    expect(dcp).toBeInstanceOf(DCP);
  });

  it('Undefined Json input exception check', () => {
    const dcp = new DCP(undefined);
    expect(dcp).toBeDefined();
    expect(dcp).toBeInstanceOf(DCP);
  });
});
