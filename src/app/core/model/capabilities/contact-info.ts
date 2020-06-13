import {Address} from './address';

export class ContactInfo {

  private readonly _address: Address;

  constructor(contactInfoJson: ContactInfo) {
    if (contactInfoJson != null) {
      this._address = new Address(contactInfoJson.address);
    }
  }

  get address(): Address {
    return this._address;
  }
}
