import { Process } from './process';

describe('Process', () => {
  it('should create an instance', () => {
    expect(new Process({})).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const process = new Process(null);
    expect(process).toBeDefined();
    expect(process).toBeInstanceOf(Process);
  });

  it('Undefined Json input exception check', () => {
    const process = new Process(undefined);
    expect(process).toBeDefined();
    expect(process).toBeInstanceOf(Process);
  });
});
