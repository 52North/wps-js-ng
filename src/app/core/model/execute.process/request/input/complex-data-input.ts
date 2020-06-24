import {DataInput} from './data-input';

export class ComplexDataInput implements DataInput{
  type: string;
  identifier: string;
  mimeType: string;
  schema: string;
  encoding: string;
  asReference: boolean;
  complexPayload: any;

  /**
   * the following parameters are mandatory: identifier and
   * complexPayload
   *
   * the rest might be set to 'undefined'!
   *
   * @identifier input-request identifier
   * @mimeType MIME type of the input-request; may be 'undefined'
   * @schema reference to a schema; may be 'undefined'
   * @encoding encoding; may be 'undefined'
   * @complexPayload the complex payload (XML tags) as String
   * @asReference boolean, either "true" or "false", indicating
   *              whether parameter body contains a URL as reference
   *              to an external body or the actual POST body
   */


  constructor(identifier: string, mimeType: string,
              schema: string, encoding: string,
              asReference: boolean = false, complexPayload: any) {
    this.type = 'complex';
    this.identifier = identifier;
    this.mimeType = mimeType;
    this.schema = schema;
    this.encoding = encoding;
    this.asReference = asReference;
    this.complexPayload = complexPayload;
  }
}
