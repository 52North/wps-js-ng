export class DataType {
  private readonly _type: string;
  private readonly _reference: string;

  constructor(dataType: any) {
    if (dataType != null){
      this._type = dataType.type;
      this._reference = dataType.reference;
    }
  }

  get type(): string {
    return this._type;
  }

  get reference(): string {
    return this._reference;
  }
}
