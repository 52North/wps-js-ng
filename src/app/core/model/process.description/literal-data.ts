import { LiteralDataDomains } from 'src/app/core/model/process.description/literal-data-domains';
import {Format} from './format';

export class LiteralData {
  private readonly _literalDataDomains: LiteralDataDomains[];
  private readonly _formats: Format[];

  constructor(literalDataResponse: any) {
    if (literalDataResponse != null){
      this._formats = new Array<Format>();
      literalDataResponse.formats?.forEach( e => {
        this._formats.push(new Format(e));
      });
      this._literalDataDomains = new Array<LiteralDataDomains>();
      literalDataResponse.literalDataDomains?.forEach( e => {
        this._literalDataDomains.push(new LiteralDataDomains(e));
      });
    }

  }
  get literalDataDomains(): LiteralDataDomains[] {
    return this._literalDataDomains;
  }

  get formats(): Format[] {
    return this._formats;
  }
}
