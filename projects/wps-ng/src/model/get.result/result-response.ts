import {ExecuteResponse} from '../execute.process/response/execute-response';
import {ExecuteResponseObject} from '../execute.process/response/execute-response-object';

export class ResultResponse {
  private readonly _responseDocument: Document;
  private readonly _executeResponse: ExecuteResponseObject;

  constructor(resultResponse: any) {
    if (resultResponse != null){
      this._responseDocument = resultResponse.responseDocument;
      this._executeResponse = new ExecuteResponseObject(resultResponse.executeResponse);
    }
  }

  get responseDocument(): Document {
    return this._responseDocument;
  }

  get executeResponse(): ExecuteResponseObject {
    return this._executeResponse;
  }
}
