import { ServiceIdentification } from './service-identification';

describe('ServiceIdentification', () => {
  it('should create an instance', () => {
    expect(new ServiceIdentification({})).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const serviceidentification = new ServiceIdentification(null);
    expect(serviceidentification).toBeDefined();
    expect(serviceidentification).toBeInstanceOf(ServiceIdentification);
  });

  it('Undefined Json input exception check', () => {
    const serviceidentification = new ServiceIdentification(undefined);
    expect(serviceidentification).toBeDefined();
    expect(serviceidentification).toBeInstanceOf(ServiceIdentification);
  });
});
