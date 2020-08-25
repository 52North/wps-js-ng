import { BBoxData } from './b-box-data';

describe('BBoxData', () => {
  it('should create an instance', () => {
    expect(new BBoxData(undefined)).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const bboxData = new BBoxData(null);
    expect(bboxData).toBeDefined();
    expect(bboxData).toBeInstanceOf(BBoxData);
  });

  it('Undefined Json input exception check', () => {
    const bboxData = new BBoxData(undefined);
    expect(bboxData).toBeDefined();
    expect(bboxData).toBeInstanceOf(BBoxData);
  });
});
