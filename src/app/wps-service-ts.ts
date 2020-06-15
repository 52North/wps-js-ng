import {Settings} from './core/settings';
import {CapabilitiesResponse} from './core/model/capabilities/capabilities-response';

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



}
