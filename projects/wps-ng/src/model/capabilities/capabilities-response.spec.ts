import { CapabilitiesResponse } from './capabilities-response';

describe('CapabilitiesResponse', () => {
  it('should create an instance', () => {
    expect(new CapabilitiesResponse({})).toBeTruthy();
  });

  it('Null Json input exception check', () => {
    const capabilitiesResponse = new CapabilitiesResponse(null);
    expect(capabilitiesResponse).toBeDefined();
    expect(capabilitiesResponse).toBeInstanceOf(CapabilitiesResponse);
  });

  it('Undefined Json input exception check', () => {
    const capabilities = new CapabilitiesResponse(undefined);
    expect(capabilities).toBeDefined();
    expect(capabilities).toBeInstanceOf(CapabilitiesResponse);
  });
});
