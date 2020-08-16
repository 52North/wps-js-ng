import { DataType } from './data-type';

describe('DataType', () => {
  it('should create an instance', () => {
    expect(new DataType({})).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const dataType = new DataType(null);
    expect(dataType).toBeDefined();
    expect(dataType).toBeInstanceOf(DataType);
  });

  it('Undefined Json input exception check', () => {
    const dataType = new DataType(undefined);
    expect(dataType).toBeDefined();
    expect(dataType).toBeInstanceOf(DataType);
  });
});
