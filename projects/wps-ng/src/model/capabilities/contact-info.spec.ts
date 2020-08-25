import { ContactInfo } from './contact-info';

describe('ContactInfo', () => {
  it('should create an instance', () => {
    expect(new ContactInfo({})).toBeTruthy();
  });

  it('Null Json input exception check', () => {
    const contactInfo = new ContactInfo(null);
    expect(contactInfo).toBeDefined();
    expect(contactInfo).toBeInstanceOf(ContactInfo);
  });

  it('Undefined Json input exception check', () => {
    const contactInfo = new ContactInfo(undefined);
    expect(contactInfo).toBeDefined();
    expect(contactInfo).toBeInstanceOf(ContactInfo);
  });
});
