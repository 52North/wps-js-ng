import { LiteralData } from './literal-data';

describe('LiteralData', () => {
  it('should create an instance', () => {
    expect(new LiteralData(undefined)).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const literalData = new LiteralData(null);
    expect(literalData).toBeDefined();
    expect(literalData).toBeInstanceOf(LiteralData);
  });

  it('Undefined Json input exception check', () => {
    const literalData = new LiteralData(undefined);
    expect(literalData).toBeDefined();
    expect(literalData).toBeInstanceOf(LiteralData);
  });
});
