export class ServiceIdentification {

  private readonly _title: string;
  private readonly _abstractValue: string;
  private readonly _keywords: string[];
  private readonly _serviceType: string;
  private readonly _serviceTypeVersions: string[];
  private readonly _fees: string;
  private readonly _accessConstraints: string;

  constructor(serviceIdentificationJson: ServiceIdentification) {
    if (serviceIdentificationJson != null){
      this._title = serviceIdentificationJson.title;
      this._abstractValue = serviceIdentificationJson.abstractValue;
      this._keywords = new Array<string>();
      serviceIdentificationJson.keywords?.forEach( (e: string) => {
        this._keywords.push(e);
      });
      this._serviceType = serviceIdentificationJson.serviceType;
      this._serviceTypeVersions = new Array<string>();
      serviceIdentificationJson.serviceTypeVersions?.forEach( (e: string) => {
        this._serviceTypeVersions.push(e);
      });
      this._fees =  serviceIdentificationJson.fees;
      this._accessConstraints = serviceIdentificationJson.accessConstraints;
    }
  }

  get title(): string {
    return this._title;
  }

  get abstractValue(): string {
    return this._abstractValue;
  }

  get keywords(): string[] {
    return this._keywords;
  }

  get serviceType(): string {
    return this._serviceType;
  }

  get serviceTypeVersions(): string[] {
    return this._serviceTypeVersions;
  }

  get fees(): string {
    return this._fees;
  }

  get accessConstraints(): string {
    return this._accessConstraints;
  }
}
