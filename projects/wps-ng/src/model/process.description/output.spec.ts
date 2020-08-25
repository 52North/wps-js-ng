import { Output } from './output';

describe('Output', () => {
  it('should create an instance', () => {
    expect(new Output(undefined)).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const output = new Output(null);
    expect(output).toBeDefined();
    expect(output).toBeInstanceOf(Output);
  });

  it('Undefined Json input exception check', () => {
    const output = new Output(undefined);
    expect(output).toBeDefined();
    expect(output).toBeInstanceOf(Output);
  });
});
