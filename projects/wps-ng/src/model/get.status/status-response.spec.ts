import { StatusResponse } from './status-response';

describe('Status', () => {
  it('should create an instance', () => {
    expect(new StatusResponse(undefined)).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const status = new StatusResponse(null);
    expect(status).toBeDefined();
    expect(status).toBeInstanceOf(StatusResponse);
  });

  it('Undefined Json input exception check', () => {
    const status = new StatusResponse(undefined);
    expect(status).toBeDefined();
    expect(status).toBeInstanceOf(StatusResponse);
  });
});
