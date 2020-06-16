import { ComplexData } from './complex-data';

export class Output {
  private readonly _title: string;
  private readonly _abstractValue: string;
  private readonly _identifier: string;
  private readonly _complexData: ComplexData;

  constructor(outputResponse: any) {
    if (outputResponse != null){
      this._title = outputResponse.title;
      this._abstractValue = outputResponse.abstractValue;
      this._identifier = outputResponse.identifier;
      this._complexData = new ComplexData(outputResponse.complexData);
    }
  }

  get title(): string {
    return this._title;
  }

  get abstractValue(): string {
    return this._abstractValue;
  }

  get identifier(): string {
    return this._identifier;
  }

  get complexData(): ComplexData {
    return this._complexData;
  }
}
