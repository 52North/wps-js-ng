import { ComplexDataOutput } from './complex-data-output';

describe('ComplexDataOutput', () => {
  it('should create an instance', () => {
    expect(new ComplexDataOutput(undefined, undefined, undefined , undefined, undefined, undefined, undefined, undefined )).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const complexDataOutput = new ComplexDataOutput(null, null, null, null, null, null, null, null);
    expect(complexDataOutput).toBeDefined();
    expect(complexDataOutput).toBeInstanceOf(ComplexDataOutput);
  });

  it('Undefined Json input exception check', () => {
    const complexDataOutput = new ComplexDataOutput(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    expect(complexDataOutput).toBeDefined();
    expect(complexDataOutput).toBeInstanceOf(ComplexDataOutput);
  });
});
