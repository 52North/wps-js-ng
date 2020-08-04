import { Component, OnInit } from '@angular/core';
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
  BBoxDataInput, BBoxDataOutput,
  ComplexDataInput, ComplexDataOutput,
  ExecuteResponse,
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
  private wpsService: WpsNgService;

  private complexDataInputs: ComplexDataInput[];
  private complexDataOutputs: ComplexDataOutput[];
  private literalDataInputs: LiteralDataInput[];
  private literalDataOutputs: LiteralDataOutput[];
  private bBoxDataInputs: BBoxDataInput[];
  private bBoxDataOutputs: BBoxDataOutput[];

  private response: ExecuteResponse;
  private processDescriptionResponse: ProcessDescriptionResponse;



  constructor() { }

  ngOnInit(): void {
    this.wpsService = new WpsNgService('2.0.0', 'http://geoprocessing.demo.52north.org:8080/javaps/service');
    this.wpsService.processDescriptionGet('', (response: ProcessDescriptionResponse) => {
      this.processDescriptionResponse = response;
    } );
  }

  submit() {

  }

  executeExample_echoProcess() {
    this.wpsService = new WpsNgService('2.0.0', 'http://geoprocessing.demo.52north.org:8080/javaps/service');

    const boundingBoxInput = new BBoxDataInput('boundingboxInput', 'EPSG:4326', '2',
      '-14.093957177836224 -260.2059521933809', '-14.00869637063467 -260.2059521933809');
    const literalInput1 = new LiteralDataInput('duration', null, null, '1010');
    const literalInput = new LiteralDataInput('literalInput', null, null, '0.05');
    const complexInput = new ComplexDataInput('complexInput', 'text/xml',
      null, null, null,
      '<test><test2>hello</test2></test>');

    const inputs = [complexInput, literalInput1, literalInput, boundingBoxInput ];

    const literalOutput = new LiteralDataOutput('literalOutput', 'text/xml', undefined, undefined,
      undefined, undefined, undefined, undefined, undefined);
    const bboxOutput =  new BBoxDataOutput('boundingboxOutput', 'text/xml', undefined,
      undefined, 'EPSG:4326', undefined, undefined, undefined);
    const complexOutput = new ComplexDataOutput('complexOutput', 'text/xml', undefined, undefined,
      undefined, undefined, undefined, undefined, undefined, 'value');

    const outputs = [ literalOutput, bboxOutput, complexOutput];

    const xmlRequestExecuteProcess = this.wpsService.getXmlRequestExecuteProcess( 'org.n52.javaps.test.EchoProcess', 'document',
      'sync', false, inputs, outputs);
    this.sendRequestXml(xmlRequestExecuteProcess);

    this.wpsService.execute( (response => {
        console.log(response);
        this.response = response;
        this.sendResponseJson();
      }), 'org.n52.javaps.test.EchoProcess', 'document',
      'sync', false, inputs, outputs);
  }

  sendResponseJson(){

  }

  private sendRequestXml(xmlRequestExecuteProcess: string) {

  }
}
