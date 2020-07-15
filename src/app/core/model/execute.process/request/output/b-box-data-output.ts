import {DataOutput} from './data-output';

export class BBoxDataOutput implements DataOutput{
  readonly _type: string;
  readonly _identifier: string;
  readonly _mimeType: string;
  readonly _schema: string;
  readonly _encoding: string;
  readonly _crs: string;
  readonly _dimensions: string;
  readonly _lowerCorner: string;
  readonly _upperCorner: string;


  constructor(identifier: string, mimeType: string, schema: string, encoding: string, crs: string,
              dimensions: string, lowerCorner: string, upperCorner: string) {
    this._type = 'bbox';
    this._identifier = identifier;
    this._mimeType = mimeType;
    this._schema = schema;
    this._encoding = encoding;
    this._crs = crs;
    this._dimensions = dimensions;
    this._lowerCorner = lowerCorner;
    this._upperCorner = upperCorner;
  }

  get identifier(): string {
    return this._identifier;
  }

  get type(): string {
    return this._type;
  }

  get crs(): string {
    return this._crs;
  }

  get dimensions(): string {
    return this._dimensions;
  }

  get lowerCorner(): string {
    return this._lowerCorner;
  }

  get upperCorner(): string {
    return this._upperCorner;
  }
}
