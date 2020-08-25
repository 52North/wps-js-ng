import { ServiceProvider } from './service-provider';

describe('ServiceProvider', () => {
  it('should create an instance', () => {
    expect(new ServiceProvider({})).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const serviceProvider = new ServiceProvider(null);
    expect(serviceProvider).toBeDefined();
    expect(serviceProvider).toBeInstanceOf(ServiceProvider);
  });

  it('Undefined Json input exception check', () => {
    const serviceProvider = new ServiceProvider(undefined);
    expect(serviceProvider).toBeDefined();
    expect(serviceProvider).toBeInstanceOf(ServiceProvider);
  });
});
