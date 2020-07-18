export class Settings {
  private readonly _url: string;
  private readonly _version: string;

  constructor(url: string, version: string) {
    this._version = version;
    this._url = url;
  }

  get url(): string {
    return this._url;
  }

  get version(): string {
    return this._version;
  }
}
