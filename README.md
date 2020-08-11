# wps-js-ng
Next generation [Angular Library](projects/wps-ng) and a "Demo" [Angular Client](src) using the library.

This Angular Based OGC Web Processing Service (WPS) Library with the Encoding and parsing of the following functions:

Encoding and parsing of WPS requests for WPS 1.0 and 2.0 (GetCapabilities, DescribeProcess, Execute, getStatus, getResult)
Encoding and parsing of WPS responses (Capabilities, ProcessDescription, Execute ResponseDocument (WPS 1.0), Execute ResultDocument (WPS 2.0), StatusInfo Document)


| Features        | Functions           | Version  |
| ------------- |-------------| -----|
| Capabilities     | GetCapabilities (via Get & Post request) | 1 & 2 |
| Process Description | DescribeProcess (via Get & Post request)     |   1 & 2 |
| Execute Process | Request & Response with Complex, Literal and B-Box Data   |  1 & 2 |
| Get Status | Get Request with Job-id      |     2 |
| Get Result | Get Request with Job-id      |    2 |

More Details on OGC Standards could be found [here](https://www.ogc.org/standards/wps).

## Get started

### Install Library through [NPM](https://www.npmjs.com/package/wps-ng)

```shell
npm install wps-ng --save
```

### Add the dependent Javascript Libraries
This library is dependent on 2 other javascript libraries: 
[jquery](https://www.npmjs.com/package/jquery) & 
[wps-js-52-north](https://www.npmjs.com/package/wps-js-52-north), 
which are included in this library's dependency.

Hence, in your Angular CLI project, add the following code under the `scripts` tag in your `angular.json` as shown below:
```json
"scripts": [
              "node_modules/jquery/dist/jquery.js",
              "node_modules/bootstrap/dist/js/bootstrap.js",
              "node_modules/wps-js-52-north/src/web/lib/wps-js-all.js"
            ]
```

Sample: [angular.json](angular.json)

## Documentation 

### Importing the WpsNgService

To use the wps-ng library, the most important class is WpsNgService. It acts as the central interface to query Web Processing Services of version 1.0 and 2.0.
WpsNgService all the services related with this library. It can simply be imported as:
```
import { WpsNgService} from 'wps-ng';
```

### WpsNgService interface
Once you have imported, you call any of the below functions from the API


#### How to Initialize WpsNgService
Initialize the WpsNgService with your `Version` and `Url`.

Parameter 1 = Version, Parameter 2 = URL

```ts
import { WpsNgService } from 'wps-ng'

    this.wpsService = new WpsNgService( this.selectedVersion, this.selectedURL);
```
[example](src/app/wps-example/wps-example.component.ts)

At least, you have to provide a valid URL to a WPS instance within the parameter url. For parameter version valid options are 1.0.0 and 2.0.0. When omitted, 1.0.0 is used per default.

Should you want to change the url or version manually, you can call the methods:

```ts
// allowed values : "1.0.0" or "2.0.0"
wpsService.setVersion(newVersion);

// url must be a valid URL to a WPS instance
wpsService.setUrl(url);
```

Once initialized, you may use new variable to execute typical WPS requests. The following subsections describe each operation.

#### Capabilities GET-Request
This function fetches the capabilities of a server through a GET request.
The function has a `callback`  parameter 'response' after the WPS was contacted. The parameter 'response' is a [CapabilitiesResponse](projects/wps-ng/src/model/capabilities/capabilities-response.ts) Object representation of the WPS response.
```ts
import { CapabilitiesResponse } from 'wps-ng'

 this.wpsService.getCapabilitiesGET( (e: CapabilitiesResponse) => {
      console.log(e);
    });
```
Response Objects Details could be viewed here: [CapabilitiesResponse](projects/wps-ng/src/model/capabilities/capabilities-response.ts)



#### Capabilities POST-Request
Very similar to the previous function, this function fetches the capabilities of a server through a POST request.
The function has a `callback`  parameter 'response' after the WPS was contacted. The parameter 'response' is a [CapabilitiesResponse](projects/wps-ng/src/model/capabilities/capabilities-response.ts) Object representation of the WPS response.
```ts
import { CapabilitiesResponse } from 'wps-ng'

 this.wpsService.getCapabilitiesPOST( (e: CapabilitiesResponse) => {
      console.log(e);
    });
```
Response Objects Details could be viewed here: [CapabilitiesResponse](projects/wps-ng/src/model/capabilities/capabilities-response.ts)



#### Process Description GET-Request
This function fetches the Process Details through a GET Request such as :
* Process inputs/Outputs
* Job Control Option and
* Output transmission modes.

The function has 2 parameters, First is a `callback`  parameter 'response' after the WPS was contacted and second is the process identifier. The parameter 'response' is a [ProcessDescriptionResponse](projects/wps-ng/src/model/process.description/process-description-response.ts) Object representation of the WPS response.
```ts
import { ProcessDescriptionResponse } from 'wps-ng'

  this.wpsService.processDescriptionGet(this.selectedProcessIdentifier, (e: ProcessDescriptionResponse) => {
       console.log(e);
     });
```
Response Objects Details could be viewed here: [ProcessDescriptionResponse](projects/wps-ng/src/model/process.description/process-description-response.ts)



#### Process Description Post-Request
Similar to the previous function, this fetches the Process Details through a POST Request.

The function has a `callback`  parameter 'response' after the WPS was contacted and second is the process identifier. The parameter 'response' is a [ProcessDescriptionResponse](projects/wps-ng/src/model/process.description/process-description-response.ts) Object representation of the WPS response.
```ts
  import { ProcessDescriptionResponse } from 'wps-ng'

  this.wpsService.processDescriptionPost(this.selectedProcessIdentifier, (e: ProcessDescriptionResponse) => {
       console.log(e);
     });
```
Response Objects Details could be viewed here: [ProcessDescriptionResponse](projects/wps-ng/src/model/process.description/process-description-response.ts)




### Execute Process

#### Execute Request
Execute Process is a feature which is only available in POST Request.

This function has 7 parameters demonstrated below:

| Parameter        | Type           | Details  |
| ------------- |-------------|  -----|
| callback   | (response: ExecuteResponse) => void | The response object callback containing output response objects. |
| processIdentifier | string    | The identifier of the process  |  
| responseFormat  | string   | either "raw" or "document", default is "document"|  
| executionMode | string  |  either "sync" or "async";  |  
| lineage | boolean      |  only relevant for WPS 1.0; boolean, if "true" then returned response will include original input and output definition; false per default|  
| inputs | Array\<DataInput>      |  An array of needed DataInput objects, use JS-object InputGenerator to |  
| outputs | Array\<DataOutput>    | An array of requested Output objects, use JS-object OutputGenerator to create inputs |  

#### Execute Response
The callback function of execute will return the object of type [ExecuteResponse](projects/wps-ng/src/model/execute.process/response/execute-response.ts).
This object will contain the output response data.

#### Sample Usage:
```ts
import { WpsNgService } from 'wps-ng'
import { ComplexDataInput } from 'wps-ng'
import { LiteralDataInput } from 'wps-ng'
import { DataInput } from 'wps-ng'
import { ComplexDataOutput } from 'wps-ng'
import { DataOutput } from 'wps-ng'
import { ExecuteResponse } from 'wps-ng'

     this.wpsService = new WpsNgService('2.0.0', 'http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService');
     const complexInput = new ComplexDataInput('data',
       'application/x-zipped-shp',
       'http://schemas.opengis.net/gml/3.1.1/base/feature.xsd', null, true,
       'http://geoprocessing.demo.52north.org:8080/geoserver/wfs?SERVICE=WFS&amp;VERSION=1.0.0&amp;REQUEST=GetFeature&amp;TYPENAME=topp:tasmania_roads&amp;SRS=EPSG:4326&amp;OUTPUTFORMAT=GML3');
     const literalInput = new LiteralDataInput('width', 'xs:double',
       null, '0.05');
     const dataInputList = new Array<DataInput>();
     dataInputList.push(complexInput);
     dataInputList.push(literalInput);
 
     const complexDataOutput: ComplexDataOutput = new ComplexDataOutput('result', 'text/xml',
       'http://schemas.opengis.net/gml/3.1.1/base/feature.xsd',
       'UTF-8', null, false, 'result', 'result');
 
     const dataOutputList = new Array<DataOutput>();
     dataOutputList.push(complexDataOutput);
 
     this.wpsService.execute((response: ExecuteResponse) => {
         try {
           console.log(response);
         } catch (e){
           console.error(e);
         }
       },
       'org.n52.wps.server.algorithm.SimpleBufferAlgorithm',
       'document',
       'sync',
       false,
       dataInputList,
       dataOutputList);
```
As you notice in the example above, to create the arrays of dataInputList and dataOutputList, you have to use the Interfaces DataInput & DataOutput  A description of those can be found further below.

Both [DataInput](projects/wps-ng/src/model/execute.process/request/input/data-input.ts) and [DataOutput](projects/wps-ng/src/model/execute.process/request/output/data-output.ts) have 3 implementations each:

For [DataInput](projects/wps-ng/src/model/execute.process/request/input/data-input.ts):
* [ComplexDataInput](projects/wps-ng/src/model/execute.process/request/input/complex-data-input.ts)
* [LiteralDataInput](projects/wps-ng/src/model/execute.process/request/input/literal-data-input.ts)
* [BBoxDataInput](projects/wps-ng/src/model/execute.process/request/input/b-box-data-input.ts)

For [DataOutput](projects/wps-ng/src/model/execute.process/request/output/data-output.ts):
* [ComplexDataOutput](projects/wps-ng/src/model/execute.process/request/output/complex-data-output.ts)
* [LiteralDataOutput](projects/wps-ng/src/model/execute.process/request/output/literal-data-output.ts)
* [BBoxDataOutput](projects/wps-ng/src/model/execute.process/request/output/b-box-data-output.ts)

#### Retrieve Stored ExecuteResponse (WPS 1.0.0)
For WPS 1.0.0 execute operation you may define to execute it asynchronously and store a status document on the server, which is updated by the WPS. With the following method you can retrieve the response document of type [ExecuteResponse](projects/wps-ng/src/model/execute.process/response/execute-response.ts).
```ts
    this.wpsService.parseStoredExecuteResponse_WPS_1_0( (response: ExecuteResponse) => {
      console.log(response);
    } , this.form.value.url);
```

#### Type Definitions
Click on the objects below for more on Type Details
* [ExecuteResponse](projects/wps-ng/src/model/execute.process/response/execute-response.ts)
* [DataInput](projects/wps-ng/src/model/execute.process/request/input/data-input.ts)
* [DataOutput](projects/wps-ng/src/model/execute.process/request/output/data-output.ts)



Depending on the process you may use the appropriate type of object by Inheritance, such as:
```ts
// Input Objects
DataInput input = ComplexDataInput( ... );
DataInput input = LiteralDataInput( ... );
DataInput input = BBoxDataInput( ... );

// Output Objects
DataOutput output = ComplexDataOutput( ... );
DataOutput output = LiteralDataOutput( ... );
DataOutput output = BBoxDataOutput( ... );
```

### Execute Response




### GetStatus (WPS 2.0.0)
The GetStatus operation is only defined for WPS 2.0.0 and retrieves a StatusInfo Document from the WPS service, which is generated as a result of an asynchronous Execute request.

Sample Usage:
```ts
this.wpsService = new WpsNgService('2.0.0', this.selectedURL);
this.wpsService.getStatus_WPS_2_0((response: StatusResponse) => {
  console.log(response);
}, this.jobIdStatus);

```
The response is returned in the following format: [StatusResponse](projects/wps-ng/src/model/get.status/status-response.ts)


### GetResult (WPS 2.0.0)
The GetResult operation is only defined for WPS 2.0.0 and retrieves a ResultDocument from the WPS service (when a Job was executed asynchronously and has finished, then the result may be retrieved this way).

Sample Usage:
```ts
import { WpsNgService } from 'wps-ng'

this.wpsService = new WpsNgService('2.0.0', this.selectedURL);
this.wpsService.getResult_WPS_2_0((response: ResultResponse) => {
  console.log(response);
  this.sendResultResponse();
  this.resultResponse = response;
}, this.jobIdResult);
```
The response is returned in the following format: [ResultResponse](projects/wps-ng/src/model/get.result/result-response.ts)



### Generate Input Objects
This library comes packed with model Class  to create Input objects for an `Execute` request.

#### Literal Data Input
```ts
import { LiteralDataInput } from 'wps-ng'
/*  @params:
*    identifier: string, 
*    dataType: string, 
*    uom: string, 
*    value: string
*/

 const literalInput = new LiteralDataInput('width', 'xs:double',
      null, '0.05');
```
#### Complex Data Input

```ts
import { ComplexDataOutput } from 'wps-ng'
/*  @params:
*    identifier: string, 
*    mimeType: string, 
*    schema: string, 
*    encoding: string,
*    uom: string, 
*    asReference: boolean = false,
*    title: string, 
*    abstractValue: any, 
*    value?: any,            // Optional param
*    transmission?: string   // Optional param
*/
const complexDataOutput: ComplexDataOutput = new ComplexDataOutput('result', 'text/xml',
      'http://schemas.opengis.net/gml/3.1.1/base/feature.xsd',
      'UTF-8', null, false, 'result', 'result');
```

#### Bounding Box Data Input

```ts
import { BBoxDataInput } from 'wps-ng'
/*
*    identifier: string, 
*    crs: string, 
*    dimension: string, 
*    lowerCorner: string, 
*    upperCorner: string
*/



    const inputBoundingBox = new BBoxDataInput('input-boundingbox', 'EPSG:4326', '2',
      '-14.093957177836224 -260.2059521933809', '-14.00869637063467 -260.2059521933809');
```

### Generate Output Objects
Very similar to Input Objects, Output Object Class are also packed in the library.


#### Literal Data Input
```ts
import { LiteralDataOutput } from 'wps-ng'

 const literalOutput = new LiteralDataOutput('literalOutput', 'text/xml', undefined, undefined,
       undefined, undefined, undefined, undefined, 'test');
```
#### Complex Data Input

```ts
import { ComplexDataOutput } from 'wps-ng'

const complexDataOutput: ComplexDataOutput = new ComplexDataOutput('result', 'text/xml',
      'http://schemas.opengis.net/gml/3.1.1/base/feature.xsd',
      'UTF-8', null, false, 'result', 'result');
```

#### Bounding Box Data Output

```ts
import { BBoxDataOutput } from 'wps-ng'

const bboxOutput =  new BBoxDataOutput('boundingboxOutput', undefined, undefined,
      undefined, undefined, undefined, undefined, undefined);
```

## Contribute

To update the library, make your edits in the [library folder](projects/wps-ng).
Then run the following commands in order:
* ng build wps-ng --prod
* cd dist 
* cd wps-ng
* npm pack
* npm publish
* cd ../..


License
-------

wps-ng is published under Apache Software License, Version 2.0

The used libraries are:

-	jQuery - MIT License - https://jquery.org/license/
-	wps-js - Apache Software License, Version 2.0

Contact / Support
-----------------

To get help in running wps-js, please use the Geoprocessing community mailing list and forum: http://geoprocessing.forum.52north.org/

Please leave an issue on GitHub if you have any bug reports or feature requests: https://github.com/52North/wps-js/issues

Contact: Benjamin Proß (b.pross@52north.org)

