import {Process} from '../../capabilities/process';
import {ExecuteOutput} from './execute-output';
import {Status} from './status';

export class ExecuteResponseDocument {
  // Property only for Version 2
  private readonly _jobId: string;
  // Property only for Async call
  private readonly _statusLocation: string;
  private readonly _expirationDate: string;

  private readonly _service: string;
  private readonly _version: string;
  private readonly _serviceInstance: string;
  private readonly _process: Process;
  private readonly _status: Status;
  private readonly _outputs: ExecuteOutput[];

  constructor(executeResponseDocumentJson: any) {
    if (executeResponseDocumentJson != null){
      this._service = executeResponseDocumentJson.service;
      this._version = executeResponseDocumentJson.version;
      this._statusLocation = executeResponseDocumentJson.statusLocation;
      this._serviceInstance = executeResponseDocumentJson.serviceInstance;
      this._process = new Process(executeResponseDocumentJson.process);
      this._status = new Status(executeResponseDocumentJson.status);
      this._outputs = new Array<ExecuteOutput>();
      executeResponseDocumentJson.outputs?.forEach(e => {
        this._outputs.push(new ExecuteOutput(e));
      });
      this._jobId = executeResponseDocumentJson.jobId;
      this._expirationDate = executeResponseDocumentJson.expirationDate;
    }
  }

  get service(): string {
    return this._service;
  }

  get version(): string {
    return this._version;
  }

  get statusLocation(): string {
    return this._statusLocation;
  }

  get serviceInstance(): string {
    return this._serviceInstance;
  }

  get process(): Process {
    return this._process;
  }

  get status(): Status {
    return this._status;
  }

  get outputs(): ExecuteOutput[] {
    return this._outputs;
  }

  get jobId(): string {
    return this._jobId;
  }
}
