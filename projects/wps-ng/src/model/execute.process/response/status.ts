
export class Status {
  private readonly _creationTime: Date;
  private readonly _info: string;

  constructor(statusJson: any) {
    if (statusJson != null){
      this._creationTime = statusJson.creationTime;
      this._info = statusJson.info;
    }
  }

  get creationTime(): Date {
    return this._creationTime;
  }

  get info(): string {
    return this._info;
  }
}
