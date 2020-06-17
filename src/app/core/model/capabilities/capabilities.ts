import {ServiceIdentification} from './service-identification';
import {ServiceProvider} from './service-provider';
import {Operation} from './operation';
import {Process} from './process';

export class Capabilities {

  private readonly _service: string;
  private readonly _version: string;
  private readonly _serviceIdentification: ServiceIdentification;
  private readonly _serviceProvider: ServiceProvider;
  private readonly _operations: Operation[];
  private readonly _languages: string[];
  private readonly _processes: Process[];

  constructor(capabilitiesJson: any) {
    if (capabilitiesJson != null) {
      this._service = capabilitiesJson.service;
      this._version = capabilitiesJson.version;
      this._serviceIdentification = new ServiceIdentification(capabilitiesJson.serviceIdentification);
      this._serviceProvider = new ServiceProvider(capabilitiesJson.serviceProvider);
      this._operations = new Array<Operation>();
      capabilitiesJson.operations?.forEach(e => {
        this._operations.push(new Operation(e));
      });
      this._languages = new Array<string>();
      capabilitiesJson.languages?.forEach(e => {
        this._languages.push(e);
      });

      this._processes = new Array<Process>();
      capabilitiesJson.processes?.forEach(e => {
        this._processes.push(new Process(e));
      });
      this._processes = capabilitiesJson.processes;
    }
  }

  get service(): string {
    return this._service;
  }

  get version(): string {
    return this._version;
  }

  get serviceIdentification(): ServiceIdentification {
    return this._serviceIdentification;
  }

  get serviceProvider(): ServiceProvider {
    return this._serviceProvider;
  }

  get operations(): Operation[] {
    return this._operations;
  }

  get languages(): string[] {
    return this._languages;
  }

  get processes(): Process[] {
    return this._processes;
  }
}
