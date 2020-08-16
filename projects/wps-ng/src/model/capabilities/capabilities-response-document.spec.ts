import { CapabilitiesResponseDocument } from './capabilities-response-document';

describe('CapabilitiesResponseDocument', () => {
  it('should create an instance', () => {
    expect(new CapabilitiesResponseDocument({})).toBeTruthy();
  });

  it('Null Json input exception check', () => {
    const capabilitiesResponseDocument = new CapabilitiesResponseDocument(null);
    expect(capabilitiesResponseDocument).toBeDefined();
    expect(capabilitiesResponseDocument).toBeInstanceOf(CapabilitiesResponseDocument);
  });

  it('Undefined Json input exception check', () => {
    const capabilitiesResponseDocument = new CapabilitiesResponseDocument(undefined);
    expect(capabilitiesResponseDocument).toBeDefined();
    expect(capabilitiesResponseDocument).toBeInstanceOf(CapabilitiesResponseDocument);
  });
});
