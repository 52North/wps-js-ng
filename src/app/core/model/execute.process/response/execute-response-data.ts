import {ComplexDataOutput} from '../request/output/complex-data-output';

export class ExecuteResponseData {
  private readonly _complexData: ComplexDataOutput;

  constructor(complexData: ComplexDataOutput) {
    this._complexData = complexData;
  }

  get complexData(): ComplexDataOutput {
    return this._complexData;
  }
}
