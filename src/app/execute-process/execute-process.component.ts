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
import {ToastrService} from "ngx-toastr";



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
  selectedCoordinateReferenceSystemBBox = 'EPSG:4326';
  selectedDimensionBBoxInput = '2';
  lowerLeftBBoxInput = '-14.093957177836224 -260.2059521933809';
  upperRightBBoxInput = '-14.00869637063467 -260.2059521933809';
  // Literal #1
  durationValue = '10000';
  // Literal #2
  literalValue: '0.05';
  // Complex Data
  selectedMimeTypeFormatComplexInput = new Format({mimeType: 'text/xml', schema: null, encoding: null});
  complexPayload = '<test><test2>hello</test2></test>';

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

  constructor( private toastr: ToastrService) { }

  ngOnInit(): void {
    this.wpsService = new WpsNgService('2.0.0', 'http://geoprocessing.demo.52north.org:8080/javaps/service');
    this.wpsService.processDescriptionGet('org.n52.javaps.test.EchoProcess', (response: ProcessDescriptionResponse) => {
      this.processDescriptionResponse = response;
    } );
    this.wpsService = new WpsNgService('2.0.0', 'http://geoprocessing.demo.52north.org:8080/javaps/service');

  }

  submit() {
    const boundingBoxInput = new BBoxDataInput(this.processDescriptionResponse.processOffering.process.inputs[0].title,
      this.selectedCoordinateReferenceSystemBBox, this.selectedDimensionBBoxInput, this.lowerLeftBBoxInput, this.upperRightBBoxInput);

    const duration = new LiteralDataInput(this.processDescriptionResponse.processOffering.process.inputs[1].title,
      null, null, this.durationValue);

    const literalInput = new LiteralDataInput(this.processDescriptionResponse.processOffering.process.inputs[2].title,
      null, null, this.literalValue);

    const complexInput = new ComplexDataInput(this.processDescriptionResponse.processOffering.process.inputs[3].title,
      this.selectedMimeTypeFormatComplexInput.mimeType,  this.selectedMimeTypeFormatComplexInput.schema,
      this.selectedMimeTypeFormatComplexInput.encoding, null, this.complexPayload);

    this.inputs = [complexInput, duration, literalInput, boundingBoxInput ];

    const literalOutput = new LiteralDataOutput(this.processDescriptionResponse.processOffering.process.outputs[0].identifier,
      'text/xml', undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, this.selectedTransmissionModeLiteral);
    const bboxOutput =  new BBoxDataOutput(this.processDescriptionResponse.processOffering.process.outputs[1].identifier,
      'text/xml', undefined, undefined, 'EPSG:4326', undefined,
      undefined, undefined, this.selectedTransmissionModeBBox);
    const complexOutput = new ComplexDataOutput(this.processDescriptionResponse.processOffering.process.outputs[2].identifier,
      'text/xml', undefined, undefined,
      undefined, undefined, undefined, undefined, undefined, this.selectedTransmissionModeComplexOutput);

    this.outputs = [ literalOutput, bboxOutput, complexOutput];
    this.executeRequestXml = this.wpsService.getXmlRequestExecuteProcess( 'org.n52.javaps.test.EchoProcess', 'document',
      'sync', false, this.inputs, this.outputs);
    this.wpsService.execute( (response => {
        this.toastr.success('Execute Response Received', 'Execute');
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
