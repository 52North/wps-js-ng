import { ProcessDescriptionResponse } from './process-description-response';

describe('ProcessDescriptionResponse', () => {
  it('should create an instance', () => {
    expect(new ProcessDescriptionResponse(undefined)).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const processDescriptionResponse = new ProcessDescriptionResponse(null);
    expect(processDescriptionResponse).toBeDefined();
    expect(processDescriptionResponse).toBeInstanceOf(ProcessDescriptionResponse);
  });

  it('Undefined Json input exception check', () => {
    const processDescriptionResponse = new ProcessDescriptionResponse(undefined);
    expect(processDescriptionResponse).toBeDefined();
    expect(processDescriptionResponse).toBeInstanceOf(ProcessDescriptionResponse);
  });
});
