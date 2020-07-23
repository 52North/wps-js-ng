import {Settings} from '../model/settings';
import {CapabilitiesResponse} from '../model/capabilities/capabilities-response';
import {ProcessDescriptionResponse} from '../model/process.description/process-description-response';
import {ExecuteResponse} from '../model/execute.process/response/execute-response';
import {DataInput} from '../model/execute.process/request/input/data-input';
import {DataOutput} from '../model/execute.process/request/output/data-output';
import {StatusResponse} from '../model/get.status/status-response';
import {ResultResponse} from '../model/get.result/result-response';

const WPS_VERSION_1 = '1.0.0';
const WPS_VERSION_2 = '2.0.0';
declare var WpsService: any;


export class WpsNgService {
  private wpsServiceJS: any;
  constructor(private _version: string , private _url: string) {
    // Url Check
    if (!WpsNgService.isValidUrl(_url)) {
      throw new Error('Url ' + _url + ' is not valid.');
    }
    // Version Check
    this._version = (_version === WPS_VERSION_2) ? WPS_VERSION_2 : WPS_VERSION_1;

    const setting = new Settings(_url, _version);
    this.wpsServiceJS = new WpsService(setting);
  }

  /**
   * Utility Function to check URL Validity
   */
  private static isValidUrl(url: string): boolean {
    try {
      // tslint:disable-next-line:no-unused-expression
      new URL(url);
    } catch (_) {
      return false;
    }
    return true;
  }


  /**
   * allowed values : "1.0.0" or "2.0.0"
   *
   * requires Constant.js
   */
  setVersion(version: string = WPS_VERSION_2): void {
    this._version = (version === WPS_VERSION_2) ? WPS_VERSION_2 : WPS_VERSION_1;
  }

  /**
   * allowed values : "1.0.0" or "2.0.0"
   *
   * requires Constant.js
   */
  setUrl(url: string): void{
    if (!WpsNgService.isValidUrl(url)) {
      throw new Error('Url ' + url + ' is not valid.');
    }
    this._url = url;
  }


  get version(): string {
    return this._version;
  }

  get url(): string {
    return this._url;
  }

  /**
   * getCapabilities via HTTP GET
   *
   * @callbackFunction is triggered on success-event of JQuery.ajax method
   */
  getCapabilitiesGET(callback: (response: CapabilitiesResponse) => void): void {
    let capabilitiesResponse: CapabilitiesResponse;
    this.wpsServiceJS.getCapabilities_GET((response: any) => {
      capabilitiesResponse = new CapabilitiesResponse(response);
      callback(capabilitiesResponse);
    });
  }

  /**
   * getCapabilities via HTTP POST
   *
   * @callbackFunction is triggered on success-event of JQuery.ajax method.
   *                   Takes the response object as argument
   */
  getCapabilitiesPOST(callback: (capabilitiesResponse: CapabilitiesResponse) => void) {
    let capabilitiesResponse: CapabilitiesResponse;
    this.wpsServiceJS.getCapabilities_POST((response: any) => {
      capabilitiesResponse = new CapabilitiesResponse(response);
      callback(capabilitiesResponse);
    });
  }

  /**
   * process description via HTTP GET
   *
   * @callbackFunction is triggered on success-event of JQuery.ajax method.
   *                   Takes the response object as argument
   * @processIdentifier the identifier of the process
   */
  processDescriptionGet( processIdentifier: string , callback: (response: ProcessDescriptionResponse) => void) {
    let processDescriptionResponse: ProcessDescriptionResponse;
    this.wpsServiceJS.describeProcess_GET( (response: any) => {
      processDescriptionResponse = new ProcessDescriptionResponse(response);
      callback(processDescriptionResponse);
    }, processIdentifier);
  }

  /**
   * process description via HTTP POST
   *
   * @callbackFunction is triggered on success-event of JQuery.ajax method.
   *                   Takes the response object as argument
   * @processIdentifier the identifier of the process
   */
  processDescriptionPost( processIdentifier: string , callback: (response: ProcessDescriptionResponse) => void) {
    let processDescriptionResponse: ProcessDescriptionResponse;
    this.wpsServiceJS.describeProcess_POST( (response: any) => {
      processDescriptionResponse = new ProcessDescriptionResponse(response);
      callback(processDescriptionResponse);
    }, processIdentifier);
  }


  /**
   * WPS execute request via HTTP POST
   *
   * @callbackFunction is triggered on success-event of JQuery.ajax method.
   *                   Takes the response object as argument
   * @processIdentifier the identifier of the process
   * @responseFormat either "raw" or "document", default is "document"
   * @executionMode either "sync" or "async";
   * @lineage only relevant for WPS 1.0; boolean, if "true" then returned
   *          response will include original input and output definition
   * @inputs an array of needed Input objects, use JS-object InputGenerator to
   *         create inputs
   * @outputs an array of requested Output objects, use JS-object
   *          OutputGenerator to create inputs
   */

  execute(callback: (response: ExecuteResponse) => void , processIdentifier: string, responseFormat: string, executionMode: string,
          lineage: boolean, inputs: Array<DataInput>, outputs: Array<DataOutput>) {
    let executeResponse;
    this.wpsServiceJS.execute( (response: any) => {
      // Check for error
      if (response.textStatus === 'error') {
        throw new Error(response.errorThrown);
      }
      executeResponse = response;
      callback(new ExecuteResponse(executeResponse));
    }, processIdentifier, responseFormat, executionMode, lineage, inputs, outputs);
  }

  /**
   * WPS 2.0 getStatus operation to retrieve the status of an executed job
   *
   * Not usable with WPS 1.0
   *
   * @callbackFunction a callback function that will be triggered with the
   *                   parsed StatusInfo document as argument
   * @jobId the ID of the asynchronously executed job
   */
  getStatus_WPS_2_0(callback: (StatusResponse) => void, jobId: string) {
    let getStatusResponse;
    this.wpsServiceJS.getStatus_WPS_2_0( (response: any) => {
      getStatusResponse = new StatusResponse(response.executeResponse);
      callback(getStatusResponse);
    }, jobId);
  }

  /**
   * WPS 2.0 getResult operation to retrieve the Result of an executed job
   *
   * Not usable with WPS 1.0
   *
   * @callbackFunction a callback function that will be triggered with the
   *                   parsed StatusInfo document as argument
   * @jobId the ID of the asynchronously executed job
   */
  getResult_WPS_2_0(callback: (resultResponse: ResultResponse) => void, jobId: string) {
    let getResultResponse: ResultResponse;
    this.wpsServiceJS.getResult_WPS_2_0( (response: any) => {
      getResultResponse = new ResultResponse(response);
      callback(getResultResponse);
    }, jobId);
  }

  /**
   * Only important for WPS 1.0
   *
   * @callbackFunction a callback function that will be triggered with the
   *                   parsed executeResponse as argument
   * @storedExecuteResponseLocation the url, where the execute response
   *                                document is located / can be retrieved
   *                                from
   */

  parseStoredExecuteResponse_WPS_1_0(callback: (response: ExecuteResponse) => void, storedExecuteResponseLocation: string){
    let executeResponse: ExecuteResponse;
    this.wpsServiceJS.parseStoredExecuteResponse_WPS_1_0( (response: any) => {
      executeResponse = new ExecuteResponse(response);
      callback(executeResponse);
    }, storedExecuteResponseLocation);
  }


}
