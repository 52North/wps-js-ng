import { ProcessDetails } from './process-details';

describe('ProcessDetails', () => {
  it('should create an instance', () => {
    expect(new ProcessDetails(undefined)).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const processDetails = new ProcessDetails(null);
    expect(processDetails).toBeDefined();
    expect(processDetails).toBeInstanceOf(ProcessDetails);
  });

  it('Undefined Json input exception check', () => {
    const processDetails = new ProcessDetails(undefined);
    expect(processDetails).toBeDefined();
    expect(processDetails).toBeInstanceOf(ProcessDetails);
  });
});
