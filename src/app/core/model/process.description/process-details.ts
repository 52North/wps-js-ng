import { Input } from './input';
import { Output } from 'src/app/core/model/process.description/output';

export class ProcessDetails {
  private readonly _title: string;
  private readonly _abstractValue: string;
  private readonly _identifier: string;
  private readonly _inputs: Input[];
  private readonly _outputs: Output[];


  constructor(processResponse: any) {
    if (processResponse != null){
      this._title = processResponse.title;
      this._abstractValue = processResponse.abstractValue;
      this._identifier = processResponse.identifier;
      this._inputs = new Array<Input>();
      processResponse.inputs?.forEach( e => {
        this._inputs.push(new Input(e));
      });
      this._outputs = new Array<Output>();
      processResponse.outputs?.forEach( e => {
        this._outputs.push(new Output(e));
      });
    }
  }

  get title(): string {
    return this._title;
  }

  get abstractValue(): string {
    return this._abstractValue;
  }

  get identifier(): string {
    return this._identifier;
  }

  get inputs(): Input[] {
    return this._inputs;
  }

  get outputs(): Output[] {
    return this._outputs;
  }
}
