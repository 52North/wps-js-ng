import { BBoxDataInput } from './b-box-data-input';

describe('BBoxDataInput', () => {
  it('should create an instance', () => {
    expect(new BBoxDataInput(undefined, undefined, undefined,
      undefined, undefined)).toBeTruthy();
  });

  it('Null Json input exception check', () => {
    const bboxDataInput = new BBoxDataInput(null, null, null, null, null);
    expect(bboxDataInput).toBeDefined();
    expect(bboxDataInput).toBeInstanceOf(BBoxDataInput);
  });

  it('Undefined Json input exception check', () => {
    const bboxDataInput = new BBoxDataInput(undefined, undefined, undefined, undefined, undefined);
    expect(bboxDataInput).toBeDefined();
    expect(bboxDataInput).toBeInstanceOf(BBoxDataInput);
  });
});
