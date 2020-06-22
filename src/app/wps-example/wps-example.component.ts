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
  selectedVersion: string;
  selectedURL: string;
  urls: string[];
  versions: string[];
  capabilitiesResponse: CapabilitiesResponse;
  selectedProcessIdentifier: string;
  private wpsService: WpsServiceTs;
  processDescriptionResponse: ProcessDescriptionResponse;

  ngOnInit(): void {
    this.versions = new Array<string>(this.WPS_VERSION_1, this.WPS_VERSION_2);
    this.urls = new Array<string>('http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService',
      'https://ows.terrestris.de/deegree-wps/services',
      'http://zoo-project.org/cgi-bin/zoo_loader.cgi',
      'https://maps.dwd.de/geoserver/ows');
    this.selectedURL = 'http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService';
    this.selectedVersion = this.WPS_VERSION_1;
  }

  getCapabilitiesGET() {
    this.wpsService = new WpsServiceTs(this.selectedVersion, this.selectedURL);
    this.wpsService.getCapabilitiesGET( (e: CapabilitiesResponse) => {
      console.log(e);
      this.capabilitiesResponse = e;
    });
  }

  getCapabilitiesPOST() {
    this.wpsService = new WpsServiceTs(this.selectedVersion, this.selectedURL);
    this.wpsService.getCapabilitiesPOST( (e: CapabilitiesResponse) => {
      console.log(e);
      this.capabilitiesResponse = e;
    });
  }

  processDescriptionGet() {
    this.wpsService.processDescriptionGet(this.selectedProcessIdentifier, (e: ProcessDescriptionResponse) => {
      console.log(e);
      this.processDescriptionResponse = e;
    });
  }

  processDescriptionPost(){
    this.wpsService.processDescriptionPost(this.selectedProcessIdentifier, (e: ProcessDescriptionResponse) => {
      console.log(e);
      this.processDescriptionResponse = e;
    });
  }

}
