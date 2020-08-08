import {Component, EventEmitter, OnInit, Output} from '@angular/core';
/*
import {WpsNgService} from '../../../projects/wps-ng/src/lib/wps-ng.service';
import {ComplexDataInput} from '../../../projects/wps-ng/src/model/execute.process/request/input/complex-data-input';
import {ComplexDataOutput} from '../../../projects/wps-ng/src/model/execute.process/request/output/complex-data-output';
import {LiteralDataInput} from '../../../projects/wps-ng/src/model/execute.process/request/input/literal-data-input';
import {BBoxDataOutput} from '../../../projects/wps-ng/src/model/execute.process/request/output/b-box-data-output';
import {BBoxDataInput} from '../../../projects/wps-ng/src/model/execute.process/request/input/b-box-data-input';
import {LiteralDataOutput} from '../../../projects/wps-ng/src/model/execute.process/request/output/literal-data-output';
import {ExecuteResponse} from '../../../projects/wps-ng/src/model/execute.process/response/execute-response';
import {ProcessDescriptionResponse} from '../../../projects/wps-ng/src/model/process.description/process-description-response';
*/

import {
  BBoxDataInput, BBoxDataOutput, DataInput,
  ComplexDataInput, ComplexDataOutput, DataOutput,
  ExecuteResponse, Format,
  LiteralDataInput,
  LiteralDataOutput,
  ProcessDescriptionResponse,
  WpsNgService
} from 'wps-ng';



@Component({
  selector: 'app-execute-process',
  templateUrl: './execute-process.component.html',
  styleUrls: ['./execute-process.component.css']
})
export class ExecuteProcessComponent implements OnInit {
   wpsService: WpsNgService;
  @Output() messageEvent  = new EventEmitter<any>();

   response: ExecuteResponse;
   processDescriptionResponse: ProcessDescriptionResponse;
   transmissionModes = ['value', 'reference'];

   // Input Variables

   // BBox Data
  selectedMimeTypeFormatBBoxInput: string;
  selectedCoordinateReferenceSystem1: any;
  lowerLeft: string;
  upperRight: string;
  // Literal #1
  durationValue: string;
  // Literal #2
  literalValue: any;
  // Complex Data
  selectedMimeTypeFormatComplexInput: Format;
  complexPayload: string;

  // Output Variables

  // Literal
  selectedTransmissionModeLiteral: string;
  // B-Box
  selectedTransmissionModeBBox: string;
  // Complex
  selectedTransmissionModeComplexOutput: string;
  selectedMimeTypeFormatComplexOutput: Format;

  // Service Variables
  private xmlRequestExecuteProcess: string;
  private inputs: Array<DataInput>;
  private outputs: Array<DataOutput>;
  executeRequestXml: string;

  constructor() { }

  ngOnInit(): void {
    this.wpsService = new WpsNgService('2.0.0', 'http://geoprocessing.demo.52north.org:8080/javaps/service');
    this.wpsService.processDescriptionGet('org.n52.javaps.test.EchoProcess', (response: ProcessDescriptionResponse) => {
      this.processDescriptionResponse = response;
    } );
    this.wpsService = new WpsNgService('2.0.0', 'http://geoprocessing.demo.52north.org:8080/javaps/service');

    const boundingBoxInput = new BBoxDataInput('boundingboxInput', 'EPSG:4326', '2',
      '-14.093957177836224 -260.2059521933809', '-14.00869637063467 -260.2059521933809');
    const literalInput1 = new LiteralDataInput('duration', null, null, '1010');
    const literalInput = new LiteralDataInput('literalInput', null, null, '0.05');
    const complexInput = new ComplexDataInput('complexInput', 'text/xml',
      null, null, null,
      '<test><test2>hello</test2></test>');

    this.inputs = [complexInput, literalInput1, literalInput, boundingBoxInput ];

    const literalOutput = new LiteralDataOutput('literalOutput', 'text/xml', undefined, undefined,
      undefined, undefined, undefined, undefined, undefined);
    const bboxOutput =  new BBoxDataOutput('boundingboxOutput', 'text/xml', undefined,
      undefined, 'EPSG:4326', undefined, undefined, undefined);
    const complexOutput = new ComplexDataOutput('complexOutput', 'text/xml', undefined, undefined,
      undefined, undefined, undefined, undefined, undefined, 'value');

    this.outputs = [ literalOutput, bboxOutput, complexOutput];
  }

  submit() {
    this.executeRequestXml = this.wpsService.getXmlRequestExecuteProcess( 'org.n52.javaps.test.EchoProcess', 'document',
      'sync', false, this.inputs, this.outputs);
    this.wpsService.execute( (response => {
        console.log(response);
        this.response = response;
        this.sendResponse();
      }), 'org.n52.javaps.test.EchoProcess', 'document',
      'sync', false, this.inputs, this.outputs);
  }

  sendResponse(){
    this.messageEvent.emit(this.response);
  }
}
