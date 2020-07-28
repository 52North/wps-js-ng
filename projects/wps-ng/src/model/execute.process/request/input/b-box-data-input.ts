import {DataInput} from './data-input';

export class BBoxDataInput implements DataInput{
   identifier: string;
   type: string;
   crs: string;
   dimension: string;
   lowerCorner: string;
   upperCorner: string;

  /**
   * the following parameters are mandatory: identifier, crs,
   * lowerCorner and upperCorner
   *
   * the rest might be set to 'undefined'!
   *
   * @identifier input-request identifier
   * @crs coordinate reference system URI
   * @dimension number of dimensions in this CRS
   * @lowerCorner orderedSequence of double values
   * @upperCorner orderedSequence of double values
   */

  constructor( identifier: string, crs: string, dimension: string, lowerCorner: string, upperCorner: string) {
    this.type = 'bbox';
    this.identifier = identifier;
    this.crs = crs;
    this.dimension = dimension || undefined;
    this.lowerCorner = lowerCorner;
    this.upperCorner = upperCorner;
  }
}
