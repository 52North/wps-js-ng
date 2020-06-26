export class ComplexDataOutputV2 {
   type: string;
   identifier: string;
   mimeType: string;
   schema: string;
   encoding: string;
   transmission: string;
  /**
   * the following parameters are mandatory: identifier and transmission
   *
   * the rest might be set to 'undefined'!
   *
   * @identifier output-request identifier
   * @mimeType MIME type of the input; may be 'undefined'
   * @schema reference to a schema; may be 'undefined'
   * @encoding encoding; may be 'undefined'
   * @transmission either "value" or "reference"
   */

  constructor(identifier: string, mimeType: string,
              schema: string, encoding: string, transmission: string= 'value') {
    this.type = 'complex';
    this.identifier = identifier;
    this.mimeType = mimeType;
    this.schema = schema;
    this.encoding = encoding;
    this.transmission = transmission;
  }
}
