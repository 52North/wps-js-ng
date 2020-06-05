export class Process {
  private _title: string;
  private _identifier: string;
  private _processVersion: string;
  private _jobControlOptions: string;
  private _outputTransmission: string;

  constructor(processJson: any) {
    if (processJson != null){
      this._title = processJson.title;
      this._identifier = processJson.identifier;
      this._processVersion = processJson.processVersion;
      this._jobControlOptions = processJson.jobControlOptions;
      this._outputTransmission = processJson.outputTransmission;
    }
  }

  get title(): string {
    return this._title;
  }

  get identifier(): string {
    return this._identifier;
  }

  get processVersion(): string {
    return this._processVersion;
  }

  get jobControlOptions(): string {
    return this._jobControlOptions;
  }

  get outputTransmission(): string {
    return this._outputTransmission;
  }
}
