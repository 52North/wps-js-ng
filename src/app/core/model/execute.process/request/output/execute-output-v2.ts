import {ComplexDataOutputV2} from './complex-data-output-v2';
import {LiteralDataOutputV2} from './literal-data-output-v2';

export class ExecuteOutputV2 {
  private readonly complexInputList: ComplexDataOutputV2[];
  private readonly literalDataInput: LiteralDataOutputV2[];

  constructor(complexInputList: ComplexDataOutputV2[], literalDataInput: LiteralDataOutputV2[]) {
    this.complexInputList = complexInputList;
    this.literalDataInput = literalDataInput;
  }
}
