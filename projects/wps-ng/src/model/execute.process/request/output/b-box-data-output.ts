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
