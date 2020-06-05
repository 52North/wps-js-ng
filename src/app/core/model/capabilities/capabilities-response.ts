import {Capabilities} from './capabilities';
import {ResponseDocument} from './response-document';

export class CapabilitiesResponse {
  private _responseDocument: ResponseDocument;
  private _capabilities: Capabilities;

  constructor(capabilitiesResponseJson: any) {
    this._responseDocument = new ResponseDocument(capabilitiesResponseJson.responseDocument);
    this._capabilities = new Capabilities(capabilitiesResponseJson.capabilities);
  }


  get responseDocument(): ResponseDocument {
    return this._responseDocument;
  }

  get capabilities(): Capabilities {
    return this._capabilities;
  }
}
