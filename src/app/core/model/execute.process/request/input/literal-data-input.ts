import {DataInput} from './data-input';

export class LiteralDataInput implements DataInput{
  type: string;
  identifier: string;
  dataType: string;
  uom: string;
  value: string;

  /**
   * the following parameters are mandatory: identifier and value
   *
   * the rest might be set to 'undefined'!
   *
   * @identifier input-request identifier
   * @dataType data type of the input-request; may be 'undefined'
   * @uom unit of measure; may be 'undefined'
   * @value the literal value of the input-request
   */
  constructor(identifier: string, dataType: string, uom: string, value: string) {
    this.type = 'literal';
    this.identifier = identifier;
    this.dataType = dataType;
    this.uom = uom;
    this.value = value;
  }

}
