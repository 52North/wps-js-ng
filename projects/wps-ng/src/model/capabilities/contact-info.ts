import {Address} from './address';

export class ContactInfo {
  private readonly _address: Address;

  constructor(contactInfoJson: any) {
    if (contactInfoJson != null) {
      this._address = new Address(contactInfoJson.address);
    }
  }

  get address(): Address {
    return this._address;
  }
}
