// tslint:disable-next-line:no-namespace
declare namespace WpsServiceModule {

  export interface Service {

    new(settings: { version: string; url: string }): WpsServiceModule.Service;

    settings: import('./core/settings').Settings;

    init(settings: import('./core/settings').Settings): WpsServiceModule.Service;

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
                                      import('./core/model/capabilities/capabilities-response').CapabilitiesResponse) => void): void;

    /**
     * getCapabilities via HTTP POST
     *
     * @callbackFunction is triggered on success-event of JQuery.ajax method.
     *                   Takes the response object as argument
     */
    getCapabilities_POST(callback: (response:
                                      import('./core/model/capabilities/capabilities-response').CapabilitiesResponse) => void): void;

    /**
     * getCapabilities via HTTP POST
     *
     * @callbackFunction is triggered on success-event of JQuery.ajax method.
     *                   Takes the response object as argument
     */
    getCapabilities_POST(callback: (response:
                                      import('./core/model/capabilities/capabilities-response').CapabilitiesResponse) => void): void;

    /**
     * process description via HTTP GET
     *
     * @callbackFunction is triggered on success-event of JQuery.ajax method.
     *                   Takes the response object as argument
     * @processIdentifier the identifier of the process
     */
    describeProcess_GET(callback: (response:
                                     import('./core/model/process.description/process-description-response')
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
                                      import('./core/model/process.description/process-description-response')
                                        .ProcessDescriptionResponse) => void,
                         processIdentifier: string);


    execute(callbackFunction: (response: any) => void , processIdentifier: string,
            responseFormat: string, executionMode: string,
            lineage: boolean, inputs: Array<any>, outputs: Array<any>);

    /**
     * Only important for WPS 1.0
     *
     * @callbackFunction a callback function that will be triggered with the
     *                   parsed executeResponse as argument
     * @storedExecuteResponseLocation the url, where the execute response
     *                                document is located / can be retrieved
     *                                from
     */
    parseStoredExecuteResponse_WPS_1_0(callback: (executeResponse) => any, storedExecuteResponseLocation);


  }
}

declare var WpsService: WpsServiceModule.Service;
