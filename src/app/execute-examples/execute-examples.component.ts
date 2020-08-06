import {Component, OnInit, Output, EventEmitter} from '@angular/core';
/*
import {WpsNgService} from '../../../projects/wps-ng/src/lib/wps-ng.service';
import {ExecuteResponse} from '../../../projects/wps-ng/src/model/execute.process/response/execute-response';
import {ComplexDataInput} from '../../../projects/wps-ng/src/model/execute.process/request/input/complex-data-input';
import {LiteralDataInput} from '../../../projects/wps-ng/src/model/execute.process/request/input/literal-data-input';
import {DataInput} from '../../../projects/wps-ng/src/model/execute.process/request/input/data-input';
import {ComplexDataOutput} from '../../../projects/wps-ng/src/model/execute.process/request/output/complex-data-output';
import {DataOutput} from '../../../projects/wps-ng/src/model/execute.process/request/output/data-output';
import {LiteralDataOutput} from '../../../projects/wps-ng/src/model/execute.process/request/output/literal-data-output';
import {BBoxDataOutput} from '../../../projects/wps-ng/src/model/execute.process/request/output/b-box-data-output';
import {BBoxDataInput} from '../../../projects/wps-ng/src/model/execute.process/request/input/b-box-data-input';
*/

import {
  BBoxDataInput, BBoxDataOutput,
  ComplexDataInput,
  ComplexDataOutput,
  DataInput,
  DataOutput,
  ExecuteResponse,
  LiteralDataInput,
  LiteralDataOutput,
  WpsNgService
} from 'wps-ng';



@Component({
  selector: 'app-execute-examples',
  templateUrl: './execute-examples.component.html',
  styleUrls: ['./execute-examples.component.css']
})
export class ExecuteExamplesComponent implements OnInit {
  @Output() executeResponseEvent  = new EventEmitter<any>();
  @Output() executeRequestXMLEvent  = new EventEmitter<any>();

  urls: string[];
  versions: string[];
  selectedURL = 'http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService';
  selectedVersion = '1.0.0';
  rightScreenTitle: string;
  wpsService: WpsNgService;
  response: ExecuteResponse;
  executeRequestXml: string;

  constructor() { }

  ngOnInit(): void {
    this.wpsService = new WpsNgService( this.selectedVersion, this.selectedURL);
    this.urls = [
      'http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService',
      'https://ows.terrestris.de/deegree-wps/services',
      'http://zoo-project.org/cgi-bin/zoo_loader.cgi',
      'https://maps.dwd.de/geoserver/ows',
      'https://riesgos.52north.org/wps/WebProcessingService'
    ];
    this.versions = ['1.0.0', '2.0.0'];
    this.rightScreenTitle = 'Output appears here';
  }

  executeV1Sync() {
    this.wpsService = new WpsNgService('1.0.0', 'http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService');

    const complexInput = new ComplexDataInput('data',
      'text/xml',
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

    const xmlRequestExecuteProcess = this.wpsService.getXmlRequestExecuteProcess( 'org.n52.wps.server.algorithm.SimpleBufferAlgorithm',
      'raw',
      'sync',
      false,
      dataInputList,
      dataOutputList);
    this.sendRequestXml(xmlRequestExecuteProcess);

    this.wpsService.execute((response: ExecuteResponse) => {
        try {
          console.log(response);
          this.response = response;
          this.sendResponseJson();
        } catch (e){
          console.error(e);
        }
      },
      'org.n52.wps.server.algorithm.SimpleBufferAlgorithm',
      'document',
      'sync',
      true,
      dataInputList,
      dataOutputList);
  }

  executeV1Async() {
    this.wpsService = new WpsNgService('1.0.0', 'http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService');
    const complexInput = new ComplexDataInput('data',
      'text/xml',
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

    const xmlRequestExecuteProcess = this.wpsService.getXmlRequestExecuteProcess( 'org.n52.wps.server.algorithm.SimpleBufferAlgorithm',
      'document',
      'async',
      false,
      dataInputList,
      dataOutputList);
    this.sendRequestXml(xmlRequestExecuteProcess);

    this.wpsService.execute((response: ExecuteResponse) => {
        try {
          console.log(response);
          this.response = response;
          this.sendResponseJson();
        } catch (e){
          console.error(e);
        }
      },
      'org.n52.wps.server.algorithm.SimpleBufferAlgorithm',
      'document',
      'async',
      false,
      dataInputList,
      dataOutputList);
  }

  executeV2Sync() {
    this.wpsService = new WpsNgService('2.0.0', 'http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService');
    const complexInput = new ComplexDataInput('data',
      'text/xml', 'http://schemas.opengis.net/gml/3.1.1/base/feature.xsd', null, true,
      'http://geoprocessing.demo.52north.org:8080/geoserver/wfs?SERVICE=WFS&amp;VERSION=1.0.0&amp;REQUEST=GetFeature&amp;TYPENAME=topp:tasmania_roads&amp;SRS=EPSG:4326&amp;OUTPUTFORMAT=GML3');
    const literalInput = new LiteralDataInput('width', null,
      null, '0.05');
    const inputs = [complexInput, literalInput];

    const complexOutput = new ComplexDataOutput('result', 'text/xml',
      'http://schemas.opengis.net/gml/3.1.1/base/feature.xsd', 'UTF-8', undefined, undefined, undefined, undefined, undefined, 'value');
    const outputs = [complexOutput];

    const xmlRequestExecuteProcess = this.wpsService.getXmlRequestExecuteProcess( 'org.n52.wps.server.algorithm.SimpleBufferAlgorithm', 'document',
      'sync', false, inputs, outputs);
    this.sendRequestXml(xmlRequestExecuteProcess);

    this.wpsService.execute( (response => {
        console.log(response);
        this.response = response;
        this.sendResponseJson();
      }), 'org.n52.wps.server.algorithm.SimpleBufferAlgorithm', 'document',
      'sync', false, inputs, outputs);
  }

  executeV2Async() {
    this.wpsService = new WpsNgService('2.0.0', 'http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService');
    const complexInput = new ComplexDataInput('data',
      'text/xml', 'http://schemas.opengis.net/gml/3.1.1/base/feature.xsd', null, true,
      'http://geoprocessing.demo.52north.org:8080/geoserver/wfs?SERVICE=WFS&amp;VERSION=1.0.0&amp;REQUEST=GetFeature&amp;TYPENAME=topp:tasmania_roads&amp;SRS=EPSG:4326&amp;OUTPUTFORMAT=GML3');
    const literalInput = new LiteralDataInput('width', null,
      null, '0.05');
    const inputs = [complexInput, literalInput];

    const complexOutput = new ComplexDataOutput('result', 'text/xml',
      'http://schemas.opengis.net/gml/3.1.1/base/feature.xsd', 'UTF-8', undefined, undefined, undefined, undefined, undefined, 'value');
    const outputs = [complexOutput];

    const xmlRequestExecuteProcess = this.wpsService.getXmlRequestExecuteProcess( 'org.n52.wps.server.algorithm.SimpleBufferAlgorithm', 'document',
      'async', false, inputs, outputs);
    this.sendRequestXml(xmlRequestExecuteProcess);

    this.wpsService.execute( (response => {
        console.log(response);
        this.response = response;
        this.sendResponseJson();
      }), 'org.n52.wps.server.algorithm.SimpleBufferAlgorithm', 'document',
      'async', false, inputs, outputs);
  }

  executeExample_SimpleBufferAlgorithm() {
    this.wpsService = new WpsNgService('2.0.0', 'http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService');
    const complexInput = new ComplexDataInput('data',
      'text/xml', 'http://schemas.opengis.net/gml/3.1.1/base/feature.xsd', null, true,
      'http://geoprocessing.demo.52north.org:8080/geoserver/wfs?SERVICE=WFS&amp;VERSION=1.0.0&amp;REQUEST=GetFeature&amp;TYPENAME=topp:tasmania_roads&amp;SRS=EPSG:4326&amp;OUTPUTFORMAT=GML3');
    const literalInput = new LiteralDataInput('width', null,
      null, '0.05');
    const inputs = [complexInput, literalInput];

    const complexOutput = new ComplexDataOutput('result', 'text/xml',
      'http://schemas.opengis.net/gml/3.1.1/base/feature.xsd', 'UTF-8', undefined, undefined, undefined, undefined, undefined, 'value');
    const outputs = [complexOutput];

    const xmlRequestExecuteProcess = this.wpsService.getXmlRequestExecuteProcess( 'org.n52.wps.server.algorithm.SimpleBufferAlgorithm', 'document',
      'async', false, inputs, outputs);
    this.sendRequestXml(xmlRequestExecuteProcess);

    this.wpsService.execute( (response => {
        console.log(response);
        this.response = response;
        this.sendResponseJson();
      }), 'org.n52.wps.server.algorithm.SimpleBufferAlgorithm', 'document',
      'async', false, inputs, outputs);
  }


  executeExample_TiffImage() {
    this.wpsService = new WpsNgService('1.0.0', 'http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService');

    const complexInput = new ComplexDataInput('input',
      'image/tiff', 'http://www.opengis.net/ows/1.1', undefined, true,
      'http://geoprocessing.demo.52north.org:8080/xyz/elev_srtm_30m.tif');
    const inputs = [complexInput];

    const complexOutput = new ComplexDataOutput('output', 'image/tiff',
      undefined, undefined, undefined, undefined, undefined, undefined);
    const outputs = [complexOutput];

    const xmlRequestExecuteProcess = this.wpsService.getXmlRequestExecuteProcess( 'r.resample', 'document',
      'async', false, inputs, outputs);
    this.sendRequestXml(xmlRequestExecuteProcess);

    this.wpsService.execute( (response => {
        console.log(response);
        this.response = response;
        this.sendResponseJson();
      }), 'r.resample', 'document',
      'async', false, inputs, outputs);
  }

  executeInlineShape62_Inline() {
    this.wpsService = new WpsNgService('1.0.0', 'http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService');

    const complexInput = new ComplexDataInput('data',
      'application/x-zipped-shp', undefined, 'base64', false,
      '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');

    const literalInput = new LiteralDataInput('width', undefined,
      undefined, '0.05');
    const inputs = [complexInput, literalInput];

    const complexOutput = new ComplexDataOutput('result', 'application/x-zipped-shp',
      undefined, 'base64', undefined, undefined, undefined, undefined, undefined, undefined );
    const outputs = [complexOutput];

    const xmlRequestExecuteProcess = this.wpsService.getXmlRequestExecuteProcess( 'org.n52.wps.server.algorithm.SimpleBufferAlgorithm', 'document',
      'sync', false, inputs, outputs);
    this.sendRequestXml(xmlRequestExecuteProcess);

    this.wpsService.execute( (response => {
        console.log(response);
        this.response = response;
        this.sendResponseJson();
      }), 'org.n52.wps.server.algorithm.SimpleBufferAlgorithm', 'document',
      'sync', false, inputs, outputs);
  }

  executeExample_ManyInputs() {
    this.wpsService = new WpsNgService('2.0.0', 'https://riesgos.52north.org/wps/WebProcessingService');

    const inputBoundingBox = new BBoxDataInput('input-boundingbox', 'EPSG:4326', '2',
      '-14.093957177836224 -260.2059521933809', '-14.00869637063467 -260.2059521933809');
    const mmin = new LiteralDataInput('mmin', null, null, '6.6');
    const mmax = new LiteralDataInput('mmax', null, null, '8.5');
    const zmin = new LiteralDataInput('zmin', null, null, '5');
    const zmax = new LiteralDataInput('zmax', null, null, '140');
    const p = new LiteralDataInput('p', null, null, '0.1');
    const etype = new LiteralDataInput('etype', null, null, 'deaggregation');
    const tlon = new LiteralDataInput('tlon', null, null, '-71.5730623712764');
    const tlat = new LiteralDataInput('tlat', null, null, '-33.1299174879672');
    const inputs = [inputBoundingBox, mmin, mmax, zmin, zmax, p, etype, tlon, tlat];

    const complexOutput = new ComplexDataOutput('selected-rows', 'application/vnd.geo+json',
      undefined, 'UTF-8', undefined, undefined, undefined, undefined, undefined, 'value');
    const outputs = [complexOutput];

    const xmlRequestExecuteProcess = this.wpsService.getXmlRequestExecuteProcess( 'org.n52.wps.python.algorithm.QuakeMLProcessBBox', 'document',
      'sync', false, inputs, outputs);
    this.sendRequestXml(xmlRequestExecuteProcess);

    this.wpsService.execute( (response => {
        console.log(response);
        this.response = response;
        this.sendResponseJson();
      }), 'org.n52.wps.python.algorithm.QuakeMLProcessBBox', 'document',
      'sync', false, inputs, outputs);
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
    this.executeResponseEvent.emit(this.response);
  }
  sendRequestXml(request: string){
    this.executeRequestXml = request;
    this.executeRequestXMLEvent.emit(request);
  }
}
