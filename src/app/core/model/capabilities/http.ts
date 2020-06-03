export class HTTP {


  private _name: string;
  private _get: string;
  private _post: string;

  constructor(HTTPJson: HTTP) {
    if (HTTPJson != null)
    {
      this._name = HTTPJson.name;
      this._get = HTTPJson.get;
      this._post = HTTPJson.post;
    }
  }

  get name(): string {
    return this._name;
  }

  get get(): string {
    return this._get;
  }

  get post(): string {
    return this._post;
  }
}
