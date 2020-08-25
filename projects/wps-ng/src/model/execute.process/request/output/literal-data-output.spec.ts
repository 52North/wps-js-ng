import { LiteralDataOutput } from './literal-data-output';

describe('LiteralDataOutput', () => {
  it('should create an instance', () => {
    expect(new LiteralDataOutput(undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined, undefined )).toBeTruthy();
  });

  it('Null Json input exception check', () => {
    const literalDataOutput = new LiteralDataOutput(null, null, null, null, null, null, null, null, null);
    expect(literalDataOutput).toBeDefined();
    expect(literalDataOutput).toBeInstanceOf(LiteralDataOutput);
  });

  it('Undefined Json input exception check', () => {
    // tslint:disable-next-line:max-line-length
    const literalDataOutput = new LiteralDataOutput(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    expect(literalDataOutput).toBeDefined();
    expect(literalDataOutput).toBeInstanceOf(LiteralDataOutput);
  });
});
