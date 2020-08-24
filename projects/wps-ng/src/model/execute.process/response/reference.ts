
export class Reference {
  private readonly _href: URL;
  private readonly _format: string;
  private readonly _encoding: any;
  private readonly _schema: any;

  constructor(referenceJson: Reference) {
    if (referenceJson != null) {
      if (referenceJson.href != null) {
        this._href = new URL(String(referenceJson.href));
      }
      this._format = referenceJson.format;
      this._encoding = referenceJson.encoding;
      this._schema = referenceJson.schema;
    }
  }


  get href(): URL {
    return this._href;
  }

  get format(): string {
    return this._format;
  }

  get encoding(): any {
    return this._encoding;
  }

  get schema(): any {
    return this._schema;
  }
}
