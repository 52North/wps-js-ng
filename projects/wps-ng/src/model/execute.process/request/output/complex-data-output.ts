import {DataOutput} from './data-output';

export class ComplexDataOutput implements  DataOutput {
  type: string;
  identifier: string;
  mimeType: string;
  schema: string;
  encoding: string;
  uom: string;
  asReference: boolean;
  title: string;
  abstractValue: any;
  value: any;
  transmission: string;

  /**
   * the following parameters are mandatory: identifier
   *
   * the rest might be set to 'undefined'!
   *
   * @identifier output-request identifier
   * @mimeType MIME type of the input; may be 'undefined'
   * @schema reference to a schema; may be 'undefined'
   * @encoding encoding; may be 'undefined'
   * @uom unit of measure; may be 'undefined'
   * @asReference boolean, "true" or "false"
   * @title new title
   * @abstractValue new description as text of the 'Abstract' element
   * 				  of the response document
   * @transmission either "value" or "reference"
   */


  constructor(identifier: string, mimeType: string, schema: string, encoding: string,
              uom: string, asReference: boolean = false, title: string, abstractValue: any, value?: any, transmission?: string) {
    this.type = 'complex';
    this.identifier = identifier;
    this.mimeType = mimeType;
    this.schema = schema;
    this.encoding = encoding;
    this.uom = uom;
    this.asReference = asReference;
    this.title = title;
    this.abstractValue = abstractValue;
    this.value = value;
    this.transmission = transmission;
  }
}
