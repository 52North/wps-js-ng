export class Settings {
  url: string;
  version: string;

  constructor(url:string, version: string,) {
    this.version = version;
    this.url = url;
  }
}
