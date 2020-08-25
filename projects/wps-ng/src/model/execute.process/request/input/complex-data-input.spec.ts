import { ComplexDataInput } from './complex-data-input';

describe('ComplexDatainput', () => {
  it('should create an instance', () => {
    expect(new ComplexDataInput(undefined, undefined, undefined,
      undefined, undefined, undefined)).toBeTruthy();
  });

  it('Null Json input exception check', () => {
    const complexDataInput = new ComplexDataInput(null, null, null, null, null, null);
    expect(complexDataInput).toBeDefined();
    expect(complexDataInput).toBeInstanceOf(ComplexDataInput);
  });

  it('Undefined Json input exception check', () => {
    const complexDataInput = new ComplexDataInput(undefined, undefined, undefined, undefined, undefined, undefined);
    expect(complexDataInput).toBeDefined();
    expect(complexDataInput).toBeInstanceOf(ComplexDataInput);
  });

});
