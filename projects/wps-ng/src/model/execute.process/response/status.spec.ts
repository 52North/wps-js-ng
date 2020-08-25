import { Status } from './status';

describe('Status', () => {
  it('should create an instance', () => {
    expect(new Status(undefined)).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const status = new Status(null);
    expect(status).toBeDefined();
    expect(status).toBeInstanceOf(Status);
  });

  it('Undefined Json input exception check', () => {
    const status = new Status(undefined);
    expect(status).toBeDefined();
    expect(status).toBeInstanceOf(Status);
  });
});
