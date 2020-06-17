import {HTTP} from './http';
export class DCP {

  private readonly _HTTP: HTTP;

  constructor(DCPJson: DCP) {
    if (DCPJson != null) {
      this._HTTP = new HTTP(DCPJson.HTTP);
    }
  }

  get HTTP(): HTTP {
    return this._HTTP;
  }
}
