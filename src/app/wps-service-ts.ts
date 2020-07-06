import {Settings} from './core/settings';
import {CapabilitiesResponse} from './core/model/capabilities/capabilities-response';
import {ProcessDescriptionResponse} from './core/model/process.description/process-description-response';
import {ExecuteResponse} from './core/model/execute.process/response/execute-response';
import {DataInput} from './core/model/execute.process/request/input/data-input';
import {DataOutput} from './core/model/execute.process/request/output/data-output';

const WPS_VERSION_1 = '1.0.0';
const WPS_VERSION_2 = '2.0.0';
declare var WpsService: any;

export class WpsServiceTs {

  constructor(private version: string , private url: string) {
    // Url Check
    if (!WpsServiceTs.isValidUrl(url)) {
      throw new Error('Url ' + url + ' is not valid.');
    }
    // Version Check
    this.version = (version === WPS_VERSION_2) ? WPS_VERSION_2 : WPS_VERSION_1;

    const setting = new Settings(url, version);
    this.wpsServiceJS = new WpsService(setting);
  }

  private wpsServiceJS: any;


  /**
   * Utility Function to check URL Validity
   */
  private static isValidUrl(url: string) {
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
  setVersion(version: string = WPS_VERSION_2){
    this.version = (version === WPS_VERSION_2) ? WPS_VERSION_2 : WPS_VERSION_1;
  }

  /**
   * allowed values : "1.0.0" or "2.0.0"
   *
   * requires Constant.js
   */
  setUrl(url: string){
    if (!WpsServiceTs.isValidUrl(url)) {
      throw new Error('Url ' + url + ' is not valid.');
    }
    this.url = url;
  }

  /**
   * getCapabilities via HTTP GET
   *
   * @callbackFunction is triggered on success-event of JQuery.ajax method
   */
  getCapabilitiesGET(callback: (capabilitiesResponse: CapabilitiesResponse) => void) {
    let capabilitiesResponse: CapabilitiesResponse;
    this.wpsServiceJS.getCapabilities_GET((response: any) => {
      capabilitiesResponse = new CapabilitiesResponse(response);
      callback(capabilitiesResponse);
    });
  }

  /**
   * getCapabilities via HTTP Post
   *
   * @callbackFunction is triggered on success-event of JQuery.ajax method
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
      if (this.version === '2.0.0' && response.textStatus === 'error') {
        throw new Error(response.errorThrown);
      }
      executeResponse = response;
      callback(new ExecuteResponse(executeResponse.executeResponse));
    }, processIdentifier, responseFormat, executionMode, lineage, inputs, outputs);
  }


}
