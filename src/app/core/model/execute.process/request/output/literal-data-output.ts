import {DataOutput} from './data-output';

export class LiteralDataOutput implements DataOutput{
  readonly _type: string;
  readonly _identifier: string;
  readonly _mimeType: string;
  readonly _schema: string;
  readonly _encoding: string;
  readonly _asReference: boolean;
  readonly _abstractValue: any;
  readonly _dataType: string;
  readonly _uom: string;
  readonly _value: any;


  constructor(identifier: string, mimeType: string, schema: string, encoding: string, asReference: boolean = false,
              abstractValue: any, dataType: string, uom: string, value: string) {
    this._type = 'literal';
    this._identifier = identifier;
    this._mimeType = mimeType;
    this._schema = schema;
    this._encoding = encoding;
    this._asReference = asReference;
    this._abstractValue = abstractValue;
    this._dataType = dataType;
    this._uom = uom;
    this._value = value;
  }

  get type(): string {
    return this._type;
  }

  get identifier(): string {
    return this._identifier;
  }

  get asReference(): boolean {
    return this._asReference;
  }

  get abstractValue(): any {
    return this._abstractValue;
  }

  get dataType(): string {
    return this._dataType;
  }

  get uom(): string {
    return this._uom;
  }

  get value(): any {
    return this._value;
  }
}
