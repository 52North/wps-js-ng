export class Format {
  private readonly _mimeType: string;
  private readonly _encoding: string;
  private readonly _schema: string;

  constructor(formatResponse: any) {
    if ( formatResponse != null){
      this._mimeType = formatResponse.mimeType;
      this._encoding = formatResponse.encoding;
      this._schema = formatResponse.schema;
    }
  }

  get mimeType(): string {
    return this._mimeType;
  }

  get encoding(): string {
    return this._encoding;
  }

  get schema(): string {
    return this._schema;
  }
}
