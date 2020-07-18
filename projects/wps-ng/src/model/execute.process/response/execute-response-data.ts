import {ComplexDataOutput} from '../request/output/complex-data-output';
import {DataOutput} from '../request/output/data-output';
import {BBoxDataOutput} from '../request/output/b-box-data-output';
import {LiteralDataOutput} from '../request/output/literal-data-output';
import {ComplexDataInput} from '../request/input/complex-data-input';
import {LiteralDataInput} from '../request/input/literal-data-input';
import {BBoxDataInput} from '../request/input/b-box-data-input';

export class ExecuteResponseData {
  private readonly _data: DataOutput;

  constructor(data: any) {
    if ( data != null && data.complexData != null){
      this._data = new ComplexDataOutput(
        data.complexData.identifier,
        data.complexData.mimeType,
        data.complexData.schema,
        data.complexData.encoding,
        data.complexData.uom,
        data.complexData.asReference,
        data.complexData.title,
        data.complexData.abstractValue,
        data.complexData.value);
    }
    else if ( data != null && data.literalData != null) {
      this._data = new LiteralDataOutput(
        data.literalData.identifier,
        data.literalData.mimeType,
        data.literalData.schema,
        data.literalData.encoding,
        data.literalData.asReference,
        data.literalData.abstractValue,
        data.literalData.dataType,
        data.literalData.uom,
        data.literalData.value);
    }

    else if ( data != null && data.boundingBoxData != null) {
      this._data = new BBoxDataOutput(
        data.boundingBoxData.identifier,
        data.boundingBoxData.mimeType,
        data.boundingBoxData.schema,
        data.boundingBoxData.encoding,
        data.boundingBoxData.crs,
        data.boundingBoxData.dimensions,
        data.boundingBoxData.lowerCorner,
        data.boundingBoxData.upperCorner);
    }
  }

  get data(): DataOutput {
    return this._data;
  }
}
