
export class Address {

  private readonly _deliveryPoint: string;
  private readonly _city: string;
  private readonly _administrativeArea: string;
  private readonly _postalCode: string;
  private readonly _country: string;
  private readonly _electronicMailAddress: string;

  constructor(addressJson: any) {
    if (addressJson != null) {
      this._deliveryPoint = addressJson.deliveryPoint;
      this._city = addressJson.city;
      this._administrativeArea = addressJson.administrativeArea;
      this._postalCode = addressJson.postalCode;
      this._country = addressJson.country;
      this._electronicMailAddress = addressJson.electronicMailAddress;
    }
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
