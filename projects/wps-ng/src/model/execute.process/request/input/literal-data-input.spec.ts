import { LiteralDataInput } from './literal-data-input';

describe('LiteralDataInput', () => {
  it('should create an instance', () => {
    expect(new LiteralDataInput(undefined, undefined, undefined, undefined)).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const literalDataInput = new LiteralDataInput(null, null, null, null);
    expect(literalDataInput).toBeDefined();
    expect(literalDataInput).toBeInstanceOf(LiteralDataInput);
  });

  it('Undefined Json input exception check', () => {
    const literalDataInput = new LiteralDataInput(undefined, undefined, undefined, undefined);
    expect(literalDataInput).toBeDefined();
    expect(literalDataInput).toBeInstanceOf(LiteralDataInput);
  });
});
