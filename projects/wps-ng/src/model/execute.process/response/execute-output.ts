import {ExecuteResponseData} from './execute-response-data';
import {Reference} from './reference';

export class ExecuteOutput {
  private readonly _identifier: string;
  private readonly _title: string;
  private readonly _abstractValue: any;
  private readonly _data: ExecuteResponseData;
  private readonly _reference: Reference;

  constructor(executeOutput: any) {
    if (executeOutput != null) {
      this._identifier = executeOutput.identifier;
      this._title = executeOutput.title;
      this._abstractValue = executeOutput.abstractValue;
      this._data = new ExecuteResponseData(executeOutput.data);
      this._reference =  new Reference(executeOutput.reference);
    }
  }

  get identifier(): string {
    return this._identifier;
  }

  get title(): string {
    return this._title;
  }

  get data(): ExecuteResponseData {
    return this._data;
  }

  get abstractValue(): any {
    return this._abstractValue;
  }

  get reference(): Reference {
    return this._reference;
  }
}
