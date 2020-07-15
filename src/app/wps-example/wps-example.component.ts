import { Component, OnInit } from '@angular/core';
import {WpsServiceTs} from '../wps-service-ts';
import {CapabilitiesResponse} from '../core/model/capabilities/capabilities-response';
import {ProcessDescriptionResponse} from '../core/model/process.description/process-description-response';

@Component({
  selector: 'app-wps-example',
  templateUrl: './wps-example.component.html',
  styleUrls: ['./wps-example.component.css']
})

export class WpsExampleComponent implements OnInit {
  private WPS_VERSION_1 = '1.0.0';
  private WPS_VERSION_2 = '2.0.0';
  private wpsServiceJS: any;
  title: CapabilitiesResponse;
  selectedURL = 'http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService';
  selectedVersion = '2.0.0';
  urls: string[];
  versions: string[];
  capabilitiesResponse: CapabilitiesResponse;
  selectedProcessIdentifier: string;
  private wpsService: WpsServiceTs;
  processDescriptionResponse: ProcessDescriptionResponse;
  rightScreenTitle: string;
  rightScreenJsonContent: string;
  jobIdResult: string;
  jobIdStatus: any;


  ngOnInit(): void {
    this.wpsService = new WpsServiceTs( this.selectedVersion, this.selectedURL);
    this.urls = [
      'http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService',
      'https://ows.terrestris.de/deegree-wps/services',
      'http://zoo-project.org/cgi-bin/zoo_loader.cgi',
      'https://maps.dwd.de/geoserver/ows'
    ];
    this.versions = ['1.0.0', '2.0.0'];
    this.rightScreenTitle = 'Output appears here';
  }


  getCapabilitiesGET() {
    this.wpsService = new WpsServiceTs(this.selectedVersion, this.selectedURL);
    this.wpsService.getCapabilitiesGET( (e: CapabilitiesResponse) => {
      console.log(e);
      this.capabilitiesResponse = e;
      this.updateRightScreenContents('Typescript Casted Capabilities Response', this.capabilitiesResponse);
    });
  }

  getCapabilitiesPOST() {
    this.wpsService = new WpsServiceTs(this.selectedVersion, this.selectedURL);
    this.wpsService.getCapabilitiesPOST( (e: CapabilitiesResponse) => {
      console.log(e);
      this.capabilitiesResponse = e;
      this.updateRightScreenContents('Typescript Casted Capabilities Response', this.capabilitiesResponse);
    });
  }

  processDescriptionGet() {
    this.wpsService.processDescriptionGet(this.selectedProcessIdentifier, (e: ProcessDescriptionResponse) => {
      console.log(e);
      this.processDescriptionResponse = e;
      this.updateRightScreenContents('Typescript Casted Process Description Response', this.processDescriptionResponse);
    });
  }

  processDescriptionPost(){
    this.wpsService.processDescriptionPost(this.selectedProcessIdentifier, (e: ProcessDescriptionResponse) => {
      console.log(e);
      this.processDescriptionResponse = e;
      this.updateRightScreenContents('Typescript Casted Process Description Response', this.processDescriptionResponse);
    });
  }


  updateRightScreenContents(title: string, jsonContent: any) {
    this.rightScreenTitle = title;
    this.rightScreenJsonContent = jsonContent;
  }

  receiveMessage($event){
    this.updateRightScreenContents('Execute Process', $event);
  }

  getStatus() {

  }

  getResult() {

  }
}
