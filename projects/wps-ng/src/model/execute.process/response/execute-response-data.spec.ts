import { ExecuteResponseData } from './execute-response-data';
import {ComplexData} from '../../process.description/complex-data';
import {ComplexDataOutput} from '../request/output/complex-data-output';

describe('ExecuteResponseData', () => {
  it('should create an instance', () => {
    const data = {
      complexData: {
        identifier: 'identifier',
        mimeType: 'mimeType',
        schema: 'schema',
        encoding: 'encoding',
        uom: 'uom',
        asReference: 'asReference',
        title: 'title',
        abstractValue: 'abstractValue',
        value: 'value'
      }
    };
    const resp = new ExecuteResponseData(data);
    expect(resp.data.identifier).toContain('identifier');
  });

  it('should create instance', () => {
    const data = {
      complexData: {
        identifier: 'identifier',
        mimeType: 'mimeType',
        schema: 'schema',
        encoding: 'encoding',
        uom: 'uom',
        asReference: 'asReference',
        title: 'title',
        abstractValue: 'abstractValue',
        value: 'value'
      }
    };
    const resp = new ExecuteResponseData(data);
    const cmplxData: ComplexDataOutput  = <ComplexDataOutput> resp.data;

    expect(cmplxData.mimeType).toContain('mimeType');
  });
});
