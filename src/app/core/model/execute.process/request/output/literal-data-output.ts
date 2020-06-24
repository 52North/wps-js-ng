export class LiteralDataOutput {
  private readonly type: string;
  private readonly identifier: string;
  private readonly asReference: boolean;

  constructor(identifier: string, asReference: boolean = false) {
    this.type = 'literal';
    this.identifier = identifier;
    this.asReference = asReference;
  }
}
