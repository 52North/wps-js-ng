import {Format} from './format';

export class BBoxData {
  private readonly _formats: Format[];
  private readonly _supportedCRSs: string[];

  constructor(bboxDataResponse: any) {
    if (bboxDataResponse != null){
      this._formats = new Array<Format>();
      bboxDataResponse.formats?.forEach( e => {
        this._formats.push(new Format(e));
      });

      this._supportedCRSs = new Array<string>();
      bboxDataResponse.supportedCRSs?.forEach( e => {
        this._supportedCRSs.push(e);
      });
    }
  }


  get supportedCRSs(): string[] {
    return this._supportedCRSs;
  }

  get formats(): Format[] {
    return this._formats;
  }
}
