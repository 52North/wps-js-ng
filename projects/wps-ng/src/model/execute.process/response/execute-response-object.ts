import {ExecuteResponseDocument} from './execute-response-document';

export class ExecuteResponseObject {
  private readonly _type: string;
  private readonly _serviceVersion: string;
  private readonly _responseDocument: ExecuteResponseDocument;

  constructor(executeResponseJson: any) {
    // type: string, serviceVersion: string, responseDocument: ExecuteResponseDocument
    if (executeResponseJson != null) {
      this._type = executeResponseJson.type;
      this._serviceVersion = executeResponseJson.serviceVersion;
      this._responseDocument = new ExecuteResponseDocument(executeResponseJson.responseDocument);
    }

  }

  get type(): string {
    return this._type;
  }

  get serviceVersion(): string {
    return this._serviceVersion;
  }

  get responseDocument(): ExecuteResponseDocument {
    return this._responseDocument;
  }
}
