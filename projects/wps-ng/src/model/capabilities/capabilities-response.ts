import {Capabilities} from './capabilities';

export class CapabilitiesResponse {
  private readonly _responseDocument: Document;
  private readonly _capabilities: Capabilities;

  constructor(capabilitiesResponseJson: any) {
    if (capabilitiesResponseJson != null) {
      this._responseDocument = capabilitiesResponseJson.responseDocument;
      this._capabilities = new Capabilities(capabilitiesResponseJson.capabilities);
    }
  }


  get responseDocument(): Document {
    return this._responseDocument;
  }

  get capabilities(): Capabilities {
    return this._capabilities;
  }
}
