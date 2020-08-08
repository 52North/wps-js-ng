import { Component, OnInit } from '@angular/core';
import {ExecuteResponse, ResultResponse, StatusResponse, WpsNgService} from 'wps-ng';
import {CapabilitiesResponse} from 'wps-ng';
import {ProcessDescriptionResponse} from 'wps-ng';

@Component({
  selector: 'app-wps-example',
  templateUrl: './wps-example.component.html',
  styleUrls: ['./wps-example.component.css']
})

export class WpsExampleComponent implements OnInit {
  title: CapabilitiesResponse;
  selectedURL = 'http://geoprocessing.demo.52north.org:8080/javaps/service';
  selectedVersion = '2.0.0';
  urls: string[];
  versions: string[];
  capabilitiesResponse: CapabilitiesResponse;
  selectedProcessIdentifier: string;
  wpsService: WpsNgService;
  rightScreenTitle: string;
  rightScreenJsonContent: string;


  ngOnInit(): void {
    this.wpsService = new WpsNgService(this.selectedVersion, this.selectedURL);
    this.urls = [
      'http://geoprocessing.demo.52north.org:8080/javaps/service',
      'http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService',
      'https://ows.terrestris.de/deegree-wps/services',
      'http://zoo-project.org/cgi-bin/zoo_loader.cgi',
      'https://maps.dwd.de/geoserver/ows',
      'https://riesgos.52north.org/wps/WebProcessingService'
    ];
    this.versions = ['1.0.0', '2.0.0'];
    this.rightScreenTitle = 'Output appears here';
  }


  updateRightScreenContents(title: string, jsonContent: any) {
    this.rightScreenTitle = title;
    this.rightScreenJsonContent = jsonContent;
  }

  receiveCapabilitiesResponse($event: CapabilitiesResponse) {
    this.updateRightScreenContents('Capabilities Response:', $event);
  }

  receiveProcessDescriptionResponse($event: ProcessDescriptionResponse) {
    this.updateRightScreenContents('Process Description Response:', $event);
  }

  receiveExecuteProcessResponse($event: ExecuteResponse){
    this.updateRightScreenContents('Execute Process', $event);
  }

  receiveStatusResponse($event: StatusResponse){
    this.updateRightScreenContents('Get Process Status', $event);
  }

  receiveResultResponse($event: ResultResponse){
    this.updateRightScreenContents('Get Process Result', $event);
  }

  executeRequestXml($event: string) {
    console.log($event);
  }
}
