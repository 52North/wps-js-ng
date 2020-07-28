import {DataOutput} from './data-output';

export class LiteralDataOutput implements DataOutput{
  readonly type: string;
  readonly identifier: string;
  readonly mimeType: string;
  readonly schema: string;
  readonly encoding: string;
  readonly asReference: boolean;
  readonly abstractValue: any;
  readonly dataType: string;
  readonly uom: string;
  readonly value: any;


  constructor(identifier: string, mimeType: string, schema: string, encoding: string, asReference: boolean = false,
              abstractValue: any, dataType: string, uom: string, value: string) {
    this.type = 'literal';
    this.identifier = identifier;
    this.mimeType = mimeType;
    this.schema = schema;
    this.encoding = encoding;
    this.asReference = asReference;
    this.abstractValue = abstractValue;
    this.dataType = dataType;
    this.uom = uom;
    this.value = value;
  }
}
