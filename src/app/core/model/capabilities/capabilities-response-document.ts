export class CapabilitiesResponseDocument {
  private readonly _location: string;

  constructor(responseDocumentJson: any) {
    if (responseDocumentJson != null) {
      this._location = responseDocumentJson.location;
    }
  }

  get location(): string {
    return this._location;
  }
}
