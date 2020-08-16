import { ComplexData } from './complex-data';

describe('ComplexData', () => {
  it('should create an instance', () => {
    expect(new ComplexData(undefined)).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const complexData = new ComplexData(null);
    expect(complexData).toBeDefined();
    expect(complexData).toBeInstanceOf(ComplexData);
  });

  it('Undefined Json input exception check', () => {
    const complexData = new ComplexData(undefined);
    expect(complexData).toBeDefined();
    expect(complexData).toBeInstanceOf(ComplexData);
  });
});
