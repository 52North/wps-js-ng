import {ExecuteResponseDocument} from './execute-response-document';

export class ExecuteResponseObject {
  private readonly _type: string;
  private readonly _serviceVersion: string;
  private readonly _responseDocument: ExecuteResponseDocument;
  private readonly _responseDocumentXML: any;

  constructor(executeResponseJson: any) {
    // type: string, serviceVersion: string, responseDocument: ExecuteResponseDocument
    if (executeResponseJson != null) {
      this._type = executeResponseJson.type;
      this._serviceVersion = executeResponseJson.serviceVersion;
      this._responseDocument = new ExecuteResponseDocument(executeResponseJson.responseDocument);
      if (this.isXML(executeResponseJson.responseDocument) === true){
        this._responseDocumentXML = executeResponseJson.responseDocument;
      }
    }
  }


  get responseDocumentXML(): any {
    return this._responseDocumentXML;
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

  isXML(str) {
    return str !== undefined && typeof str === 'string' && str.startsWith('<');
  }
}
