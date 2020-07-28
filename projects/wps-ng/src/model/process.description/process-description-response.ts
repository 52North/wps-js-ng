import {ProcessOffering} from './process-offering';

export class ProcessDescriptionResponse {
  private readonly _responseDocument: Document;
  private readonly _processOffering: ProcessOffering;

  constructor(processDescriptionResponse: any) {
    if (processDescriptionResponse != null){
      this._responseDocument = processDescriptionResponse.responseDocument;
      this._processOffering = new ProcessOffering(processDescriptionResponse.processOffering);
    }
  }

  get responseDocument(): Document {
    return this._responseDocument;
  }

  get processOffering(): ProcessOffering {
    return this._processOffering;
  }
}
