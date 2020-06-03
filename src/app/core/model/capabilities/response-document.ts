export class ResponseDocument {
  private _location: string;

  constructor(responseDocumentJson: any) {
    if (responseDocumentJson != null) {
      this._location = responseDocumentJson.location;
    }
  }

  get location(): string {
    return this._location;
  }
}
