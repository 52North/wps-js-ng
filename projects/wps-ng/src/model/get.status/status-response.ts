import {StatusResponseDocument} from './status-response-document';

export class StatusResponse {
  private readonly _type: string;
  private readonly _serviceVersion: string;
  private readonly _responseDocument: StatusResponseDocument;

  constructor(getStatusResponse: any) {
    if (getStatusResponse != null){
      this._type = getStatusResponse.type;
      this._serviceVersion = getStatusResponse.serviceVersion;
      this._responseDocument = new StatusResponseDocument(getStatusResponse.responseDocument);
    }
  }

  get type(): string {
    return this._type;
  }

  get serviceVersion(): string {
    return this._serviceVersion;
  }

  get responseDocument(): StatusResponseDocument {
    return this._responseDocument;
  }
}
