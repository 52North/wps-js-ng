
import { WpsNgService } from './wps-ng.service';
import {CapabilitiesResponse} from '../model/capabilities/capabilities-response';
import {ProcessDescriptionResponse} from '../model/process.description/process-description-response';
import {StatusResponse} from '../model/get.status/status-response';
import {ResultResponse} from '../model/get.result/result-response';
import {ExecuteResponse} from '../model/execute.process/response/execute-response';
import {DataInput} from '../model/execute.process/request/input/data-input';
import {DataOutput} from '../model/execute.process/request/output/data-output';


describe('WpsNgService', () => {
  let wpsService: MockedWpsJsService;
  let wpsNgService: WpsNgService;


  beforeEach(() => {
    wpsService = new MockedWpsJsService();
    wpsNgService = new WpsNgService('1.0.0',
      'http://MVSXX.COMPANY.COM:04445/CICSPLEXSM//JSMITH/MENU/OURHOME?CONTEXT=FRED&SCOPE=FRED', MockedWpsJsService);
  });

  it('should have the Mocked Wps Js Service injected',  () => {
    expect(wpsNgService.wpsServiceJS.isInitialized()).toBe(true);
  });

  it('should return capabilities object on invoking GetCapabilities',  () => {
    let capabilitiesResponse;
    wpsNgService.getCapabilitiesGET(response => { capabilitiesResponse =  response; } );
    expect(capabilitiesResponse).toBeInstanceOf(CapabilitiesResponse);
  });

  it('should return capabilities object on invoking PostCapabilities',  () => {
    let capabilitiesResponse;
    wpsNgService.getCapabilitiesGET(response => { capabilitiesResponse =  response; } );
    expect(capabilitiesResponse).toBeInstanceOf(CapabilitiesResponse);
  });

  it('should return ProcessDescription object on invoking processDescriptionGet',  () => {
    let processDescriptionResponse;
    wpsNgService.processDescriptionGet('123', response => {
      processDescriptionResponse =  response;
    });
    expect(processDescriptionResponse).toBeInstanceOf(ProcessDescriptionResponse);
  });

  it('should return ProcessDescription object on invoking processDescriptionPost',  () => {
    let processDescriptionResponse;
    wpsNgService.processDescriptionGet('123', response =>
    {
      processDescriptionResponse =  response;
    });
    expect(processDescriptionResponse).toBeInstanceOf(ProcessDescriptionResponse);
  });

  it('should return ExecuteProcessResponse object on invoking ExecuteProcess',  () => {
    let executeProcessResponse;
    wpsNgService.execute(response => {
      executeProcessResponse =  response;
    }, 'sampleIdentifier', 'sampleResponseFormat', 'sampleExecuteMode', false, new Array<DataInput>(), new Array<DataOutput>() );
    expect(executeProcessResponse).toBeInstanceOf(ExecuteResponse);
  });

  it('should return status object on invoking getStatus_WPS_2_0',  () => {
    let statusResponse;
    wpsNgService.getStatus_WPS_2_0(response => {
      statusResponse =  response;
    }, '');
    expect(statusResponse).toBeInstanceOf(StatusResponse);
  });

  it('should return ResultResponse object on invoking getResult',  () => {
    let getResult;
    wpsNgService.getResult_WPS_2_0(response => {
      getResult =  response;
    }, '');
    expect(getResult).toBeInstanceOf(ResultResponse);
  });

});

class MockedWpsJsService {
  getCapabilities_GET(callback: (response:
                                   import('../model/capabilities/capabilities-response').CapabilitiesResponse) => void): void
  {
    callback(new CapabilitiesResponse({}));
    return;
  }

  getCapabilities_POST(callback: (response:
                                    import('../model/capabilities/capabilities-response').CapabilitiesResponse) => void): void{

    callback(new CapabilitiesResponse({}));
    return;
  }

  describeProcess_GET(callback: (response:
                                   import('../model/process.description/process-description-response')
                                     .ProcessDescriptionResponse) => void,
                      processIdentifier: string){

    callback(new ProcessDescriptionResponse({}));
    return;

  }

  describeProcess_POST(callback: (response:
                                    import('../model/process.description/process-description-response')
                                      .ProcessDescriptionResponse) => void,
                       processIdentifier: string){
    callback(new ProcessDescriptionResponse({}));
    return;

  }

  execute(callbackFunction: (response: any) => void , processIdentifier: string,
          responseFormat: string, executionMode: string,
          lineage: boolean, inputs: Array<any>, outputs: Array<any>){
    callbackFunction(new ExecuteResponse({}));
    return;
  }

  parseStoredExecuteResponse_WPS_1_0(callback: (executeResponse) => any, storedExecuteResponseLocation){
    callback(new ExecuteResponse({}));
    return;
  }

  getStatus_WPS_2_0(callback: (response) => StatusResponse, jobId: string){
    callback(new StatusResponse({}));
    return;
  }

  getResult_WPS_2_0(callback: (response) => ResultResponse, jobId: string){
    callback(new ResultResponse({}));
    return;
  }

  isInitialized(): boolean {
    return true;
  }
}
