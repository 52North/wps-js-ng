import { ComplexData } from './complex-data';
import {LiteralData} from './literal-data';
import {BBoxData} from './b-box-data';

export class Output {
  private readonly _title: string;
  private readonly _abstractValue: string;
  private readonly _identifier: string;
  private readonly _complexData: ComplexData;
  private readonly _literalData: LiteralData;
  private readonly _bboxData: BBoxData;

  constructor(outputResponse: any) {
    if (outputResponse != null){

      this._title = outputResponse.title;
      this._abstractValue = outputResponse.abstractValue;
      this._identifier = outputResponse.identifier;

      if (outputResponse.literalData !== undefined) {
        this._literalData =  new LiteralData(outputResponse.literalData);
      }
      if (outputResponse.complexData !== undefined) {
        this._complexData = new ComplexData(outputResponse.complexData);
      }
      if (outputResponse.boundingBoxData !== undefined) {
        this._bboxData = new BBoxData(outputResponse.boundingBoxData);
      }
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
