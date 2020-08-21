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
  readonly transmission: string;

  /**
   * the following parameters are mandatory: identifier
   *
   * the rest might be set to 'undefined'!
   *
   * @identifier output-request identifier
   * @mimeType MIME type of the input; may be 'undefined'
   * @schema reference to a schema; may be 'undefined'
   * @encoding encoding; may be 'undefined'
   * @asReference boolean, "true" or "false"
   * @abstractValue new description as text of the 'Abstract' element
   * 				  of the response document
   * @dataType string value representing type of data such as 'application/xml'
   * @uom unit of measure; may be 'undefined'
   * @value the value of data in the received response
   * @transmission either "value" or "reference"
   */


  constructor(identifier: string, mimeType: string, schema: string, encoding: string, asReference: boolean = false,
              abstractValue: any, dataType: string, uom: string, value: string, transmission?: string) {
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
    if (transmission === undefined) {
      this.transmission = 'value';
    }
    else {
      this.transmission = transmission;
    }
  }
}
