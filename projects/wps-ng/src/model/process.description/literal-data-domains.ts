import {DataType} from './data-type';

export class LiteralDataDomains {
  private readonly _anyValue: boolean;
  private readonly _dataType: DataType;
  private readonly _defaultValue: string;
  private readonly _unitOfMeasure: string;


  constructor(literalDataDomainsJS: any) {
    if (literalDataDomainsJS != null){
      this._anyValue = literalDataDomainsJS.anyValue;
      this._dataType = new DataType(literalDataDomainsJS.dataType);
      this._defaultValue = literalDataDomainsJS.defaultValue;
      this._unitOfMeasure = literalDataDomainsJS.unitOfMeasure;
    }
  }

  get anyValue(): boolean {
    return this._anyValue;
  }

  get dataType(): DataType {
    return this._dataType;
  }

  get defaultValue(): string {
    return this._defaultValue;
  }

  get unitOfMeasure(): string {
    return this._unitOfMeasure;
  }
}
