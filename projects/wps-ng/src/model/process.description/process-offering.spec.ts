import { ProcessOffering } from './process-offering';

describe('ProcessOffering', () => {
  it('should create an instance', () => {
    expect(new ProcessOffering(undefined)).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const processOffering = new ProcessOffering(null);
    expect(processOffering).toBeDefined();
    expect(processOffering).toBeInstanceOf(ProcessOffering);
  });

  it('Undefined Json input exception check', () => {
    const processOffering = new ProcessOffering(undefined);
    expect(processOffering).toBeDefined();
    expect(processOffering).toBeInstanceOf(ProcessOffering);
  });
});
