import {DCP} from './dcp';

export class Operation {
  private _DCP: DCP;

  constructor(operationJson: any) {
    if (operationJson != null){
      this._DCP = new DCP(operationJson.DCP);
    }
  }

  get DCP(): DCP {
    return this._DCP;
  }
}
