import { LiteralDataDomains } from './literal-data-domains';

describe('LiteralDataDomains', () => {
  it('should create an instance', () => {
    expect(new LiteralDataDomains({})).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const literalDataDomains = new LiteralDataDomains(null);
    expect(literalDataDomains).toBeDefined();
    expect(literalDataDomains).toBeInstanceOf(LiteralDataDomains);
  });

  it('Undefined Json input exception check', () => {
    const literalDataDomains = new LiteralDataDomains(undefined);
    expect(literalDataDomains).toBeDefined();
    expect(literalDataDomains).toBeInstanceOf(LiteralDataDomains);
  });
});
