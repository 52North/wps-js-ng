export class Address {


  private _deliveryPoint: string;
  private _city: string;
  private _administrativeArea: string;
  private _postalCode: string;
  private _country: string;
  private _electronicMailAddress: string;

  constructor(addressJson: Address) {
    this._deliveryPoint = addressJson.deliveryPoint;
    this._city = addressJson.city;
    this._administrativeArea = addressJson.administrativeArea;
    this._postalCode = addressJson.postalCode;
    this._country = addressJson.country;
    this._electronicMailAddress = addressJson.electronicMailAddress;
  }


  get deliveryPoint(): string {
    return this._deliveryPoint;
  }

  get city(): string {
    return this._city;
  }

  get administrativeArea(): string {
    return this._administrativeArea;
  }

  get postalCode(): string {
    return this._postalCode;
  }

  get country(): string {
    return this._country;
  }

  get electronicMailAddress(): string {
    return this._electronicMailAddress;
  }
}
