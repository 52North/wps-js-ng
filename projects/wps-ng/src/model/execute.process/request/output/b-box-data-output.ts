import {DataOutput} from './data-output';

export class BBoxDataOutput implements DataOutput{
  readonly type: string;
  readonly identifier: string;
  readonly mimeType: string;
  readonly schema: string;
  readonly encoding: string;
  readonly crs: string;
  readonly dimensions: string;
  readonly lowerCorner: string;
  readonly upperCorner: string;
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
   * @crs coordinate reference system URI
   * @dimension number of dimensions in this CRS
   * @lowerCorner orderedSequence of double values
   * @upperCorner orderedSequence of double values
   * @transmission either "value" or "reference"
   */

  constructor(identifier: string, mimeType: string, schema: string, encoding: string, crs: string,
              dimensions: string, lowerCorner: string, upperCorner: string, transmission?: string  ) {
    this.type = 'bbox';
    this.identifier = identifier;
    this.mimeType = mimeType;
    this.schema = schema;
    this.encoding = encoding;
    this.crs = crs;
    this.dimensions = dimensions;
    this.lowerCorner = lowerCorner;
    this.upperCorner = upperCorner;
    if (transmission === undefined) {
      this.transmission = 'value';
    }
    else {
      this.transmission = transmission;
    }
  }

}
