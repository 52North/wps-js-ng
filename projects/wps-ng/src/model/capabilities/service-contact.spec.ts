import { ServiceContact } from './service-contact';

describe('ServiceContact', () => {
  it('should create an instance', () => {
    expect(new ServiceContact({})).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const serviceContact = new ServiceContact(null);
    expect(serviceContact).toBeDefined();
    expect(serviceContact).toBeInstanceOf(ServiceContact);
  });

  it('Undefined Json input exception check', () => {
    const serviceContact = new ServiceContact(undefined);
    expect(serviceContact).toBeDefined();
    expect(serviceContact).toBeInstanceOf(ServiceContact);
  });
});
