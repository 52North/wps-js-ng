import { ExecuteResponseData } from './execute-response-data';
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
    const cmplxData: ComplexDataOutput  = resp.data as ComplexDataOutput;
    expect(cmplxData.mimeType).toContain('mimeType');
  });
  it('Null Json input exception check', () => {
    const executeResponseData = new ExecuteResponseData(null);
    expect(executeResponseData).toBeDefined();
    expect(executeResponseData).toBeInstanceOf(ExecuteResponseData);
  });

  it('Undefined Json input exception check', () => {
    const executeResponseData = new ExecuteResponseData(undefined);
    expect(executeResponseData).toBeDefined();
    expect(executeResponseData).toBeInstanceOf(ExecuteResponseData);
  });
});

