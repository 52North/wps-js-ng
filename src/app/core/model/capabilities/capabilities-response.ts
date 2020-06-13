import {Capabilities} from './capabilities';
import {CapabilitiesResponseDocument} from './capabilities-response-document';

export class CapabilitiesResponse {
  private readonly _responseDocument: CapabilitiesResponseDocument;
  private readonly _capabilities: Capabilities;

  constructor(capabilitiesResponseJson: any) {
    this._responseDocument = new CapabilitiesResponseDocument(capabilitiesResponseJson.responseDocument);
    this._capabilities = new Capabilities(capabilitiesResponseJson.capabilities);
  }


  get responseDocument(): CapabilitiesResponseDocument {
    return this._responseDocument;
  }

  get capabilities(): Capabilities {
    return this._capabilities;
  }
}
