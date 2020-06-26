export class LiteralDataOutputV2 {
  private readonly type: string;
  private readonly identifier: string;
  private readonly transmission: any;

  constructor(identifier: string, transmission: any = 'value') {
    this.type = 'literal';
    this.identifier = identifier;
    this.transmission = transmission;
  }
}
