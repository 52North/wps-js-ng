import { BBoxDataOutput } from './b-box-data-output';

describe('BBoxDataOutput', () => {
  it('should create an instance', () => {
    expect(new BBoxDataOutput(undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined)).toBeTruthy();
  });

  it('Null Json input exception check', () => {
    const bboxDataOutput = new BBoxDataOutput(null, null, null, null, null, null, null, null);
    expect(bboxDataOutput).toBeDefined();
    expect(bboxDataOutput).toBeInstanceOf(BBoxDataOutput);
  });

  it('Undefined Json input exception check', () => {
    const bboxDataOutput = new BBoxDataOutput(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    expect(bboxDataOutput).toBeDefined();
    expect(bboxDataOutput).toBeInstanceOf(BBoxDataOutput);
  });

});
