// tslint:disable-next-line:no-namespace

import {StatusResponse} from '../model/get.status/status-response';
import {ResultResponse} from '../model/get.result/result-response';
import {ExecuteResponse} from '../model/execute.process/response/execute-response';

// tslint:disable-next-line:no-namespace
declare namespace WpsServiceModule {

  export interface Service {

    new(settings: { version: string; url: string }): WpsServiceModule.Service;

    settings: import('../model/settings').Settings;

    init(settings: import('../model/settings').Settings): WpsServiceModule.Service;

    /**
     * allowed values : "1.0.0" or "2.0.0"
     *
     * requires Constant.js
     */
    setVersion(version: string): void;

    /**
     * set base URL of target WPS
     */
    setUrl(url: string): void;

    /**
     * getCapabilities via HTTP GET
     *
     * @callbackFunction is triggered on success-event of JQuery.ajax method
     */
    getCapabilities_GET(callback: (response:
                                     import('../model/capabilities/capabilities-response').CapabilitiesResponse) => void): void;

    /**
     * getCapabilities via HTTP POST
     *
     * @callbackFunction is triggered on success-event of JQuery.ajax method.
     *                   Takes the response object as argument
     */
    getCapabilities_POST(callback: (response:
                                      import('../model/capabilities/capabilities-response').CapabilitiesResponse) => void): void;

    /**
     * process description via HTTP GET
     *
     * @callbackFunction is triggered on success-event of JQuery.ajax method.
     *                   Takes the response object as argument
     * @processIdentifier the identifier of the process
     */
    describeProcess_GET(callback: (response:
                                     import('../model/process.description/process-description-response')
                                       .ProcessDescriptionResponse) => void,
                        processIdentifier: string);

    /**
     * process description via HTTP POST
     *
     * @callbackFunction is triggered on success-event of JQuery.ajax method.
     *                   Takes the response object as argument
     * @processIdentifier the identifier of the process
     */
    describeProcess_POST(callback: (response:
                                      import('../model/process.description/process-description-response')
                                        .ProcessDescriptionResponse) => void,
                         processIdentifier: string);

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
    execute(callbackFunction: (response: any) => void , processIdentifier: string,
            responseFormat: string, executionMode: string,
            lineage: boolean, inputs: Array<any>, outputs: Array<any>);

    /**
     * WPS 2.0 getStatus operation to retrieve the status of an executed job
     *
     * Not usable with WPS 1.0
     *
     * @callbackFunction a callback function that will be triggered with the
     *                   parsed StatusInfo document as argument
     * @jobId the ID of the asynchronously executed job
     */
    getStatus_WPS_2_0(callback: (response) => StatusResponse, jobId: string);

    /**
     * WPS 2.0 getStatus operation to retrieve the status of an executed job
     *
     * Not usable with WPS 1.0
     *
     * @callbackFunction a callback function that will be triggered with the
     *                   parsed StatusInfo document as argument
     * @jobId the ID of the asynchronously executed job
     */
    getResult_WPS_2_0(callback: (response) => ResultResponse, jobId: string);

    /**
     * WPS 2.0 getStatus operation to retrieve the status of an executed job
     *
     * Not usable with WPS 1.0
     *
     * @callbackFunction a callback function that will be triggered with the
     *                   parsed StatusInfo document as argument
     * @jobId the ID of the asynchronously executed job
     */
    // tslint:disable-next-line:adjacent-overload-signatures
    parseStoredExecuteResponse_WPS_1_0(callback: (response: ExecuteResponse) => any, storedExecuteResponseLocation: string);

  }
}

