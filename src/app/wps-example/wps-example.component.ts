import { Component, OnInit } from '@angular/core';
import {ExecuteResponse, WpsNgService} from 'wps-ng';
import {CapabilitiesResponse} from 'wps-ng';
import {ProcessDescriptionResponse} from 'wps-ng';

@Component({
  selector: 'app-wps-example',
  templateUrl: './wps-example.component.html',
  styleUrls: ['./wps-example.component.css']
})

export class WpsExampleComponent implements OnInit {
  title: CapabilitiesResponse;
  selectedURL = 'http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService';
  selectedVersion = '1.0.0';
  urls: string[];
  versions: string[];
  capabilitiesResponse: CapabilitiesResponse;
  selectedProcessIdentifier: string;
  private wpsService: WpsNgService;
  processDescriptionResponse: ProcessDescriptionResponse;
  rightScreenTitle: string;
  rightScreenJsonContent: string;
  jobIdResult: string;
  jobIdStatus: any;


  ngOnInit(): void {
    this.wpsService = new WpsNgService( this.selectedVersion, this.selectedURL);
    this.urls = [
      'http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService',
      'https://ows.terrestris.de/deegree-wps/services',
      'http://zoo-project.org/cgi-bin/zoo_loader.cgi',
      'https://maps.dwd.de/geoserver/ows',
      'https://riesgos.52north.org/wps/WebProcessingService',
      'http://geoprocessing.demo.52north.org:8080/javaps/service'
    ];
    this.versions = ['1.0.0', '2.0.0'];
    this.rightScreenTitle = 'Output appears here';
  }


  updateRightScreenContents(title: string, jsonContent: any) {
    this.rightScreenTitle = title;
    this.rightScreenJsonContent = jsonContent;
  }


  getStatus() {
    this.wpsService = new WpsNgService('2.0.0', this.selectedURL);
    this.wpsService.getStatus_WPS_2_0((response) => {
      this.updateRightScreenContents('Get Status Response', response);
    }, this.jobIdStatus);
  }

  getResult() {

  }

  receiveCapabilitiesResponse($event: CapabilitiesResponse) {
    this.updateRightScreenContents('Capabilities Response:', $event);
  }

  receiveExecuteProcessResponse($event: ExecuteResponse){
    this.updateRightScreenContents('Execute Process', $event);
  }
}
