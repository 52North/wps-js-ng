import { ProcessDetails } from 'src/app/core/model/process.description/process-details';

export class ProcessOffering {
  private readonly _service: string;
  private readonly _version: string;
  private readonly _process: ProcessDetails;
  private readonly _processVersion: string;
  private readonly _jobControlOptions: string[];
  private readonly _outputTransmissionModes: string[];

  constructor(processOfferingResponse: any) {
    if (processOfferingResponse != null){
      this._service = processOfferingResponse.service;
      this._version = processOfferingResponse.version;
      this._process = new ProcessDetails(processOfferingResponse.process);
      this._processVersion = processOfferingResponse.processVersion;
      this._jobControlOptions = new Array<string>();
      processOfferingResponse.jobControlOptions?.forEach(e => { // TODO: Enquire if this the only possible values are these 2
        this._jobControlOptions.push(e);
      });
      this._outputTransmissionModes = new Array<string>();
      processOfferingResponse.outputTransmissionModes?.forEach(e => {
        this._outputTransmissionModes.push(e);
      });
    }
  }

  get service(): string {
    return this._service;
  }

  get version(): string {
    return this._version;
  }

  get process(): ProcessDetails {
    return this._process;
  }

  get processVersion(): string {
    return this._processVersion;
  }

  get jobControlOptions(): string[] {
    return this._jobControlOptions;
  }

  get outputTransmissionModes(): string[] {
    return this._outputTransmissionModes;
  }


}
