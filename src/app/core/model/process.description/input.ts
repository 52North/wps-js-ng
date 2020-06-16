import {LiteralData} from './literal-data';

export class Input {
  private readonly _title: string;
  private readonly _abstractValue: string;
  private readonly _identifier: string;
  private readonly _minOccurs: string;
  private readonly _maxOccurs: string;
  private readonly _literalData: LiteralData;

  constructor(inputResponse: any) {
    if (inputResponse != null){
      this._title = inputResponse.title;
      this._abstractValue = inputResponse.abstractValue;
      this._identifier = inputResponse.identifier;
      this._minOccurs = inputResponse.minOccurs;
      this._maxOccurs = inputResponse.maxOccurs;
      this._literalData =  new LiteralData(inputResponse.literalData);
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

  get minOccurs(): string {
    return this._minOccurs;
  }

  get maxOccurs(): string {
    return this._maxOccurs;
  }

  get literalData(): LiteralData {
    return this._literalData;
  }
}
