import {ExecuteResponseObject} from './execute-response-object';

export class ExecuteResponse {
  private readonly _resultDocument: Document;
  private readonly _executeResponse: ExecuteResponseObject;

  constructor(executeResponseJson: any) {
    if (executeResponseJson != null) {
      this._resultDocument = executeResponseJson.responseDocument;
      this._executeResponse = new ExecuteResponseObject(executeResponseJson.executeResponse);
    }
  }

  get resultDocument(): Document {
    return this._resultDocument;
  }

  get executeResponse(): ExecuteResponseObject {
    return this._executeResponse;
  }
}
