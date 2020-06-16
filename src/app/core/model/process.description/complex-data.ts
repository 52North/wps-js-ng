import {Format} from './format';

export class ComplexData {
  private readonly _formats: Format[];

  constructor(complexDataResponse: any) {
    if (complexDataResponse != null){
      this._formats = new Array<Format>();
      complexDataResponse.formats?.forEach( e => {
        this._formats.push(new Format(e));
      });
    }
  }

  get formats(): Format[] {
    return this._formats;
  }
}

