import { Component, OnInit } from '@angular/core';
import {WpsServiceTs} from '../wps-service-ts';
import {CapabilitiesResponse} from '../core/model/capabilities/capabilities-response';

@Component({
  selector: 'app-wps-example',
  templateUrl: './wps-example.component.html',
  styleUrls: ['./wps-example.component.css']
})


export class WpsExampleComponent implements OnInit {
  private static WPS_VERSION_1 = '1.0.0';
  private static WPS_VERSION_2 = '2.0.0';
  private wpsServiceJS: any;
  title: CapabilitiesResponse;
  selectedVersion: string;
  selectedURL: string;
  urls: string[];
  versions: string[];
  capabilitiesResponse: CapabilitiesResponse;

  ngOnInit(): void {
    this.versions = new Array<string>('1.0.0', '2.0.0');
    this.urls = new Array<string>('http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService',
      'https://ows.terrestris.de/deegree-wps/services',
      'http://zoo-project.org/cgi-bin/zoo_loader.cgi',
      'https://maps.dwd.de/geoserver/ows');
    this.selectedURL = 'http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService';
    this.selectedVersion = '1.0.0';
  }

  getCapabilitiesGET() {
    new WpsServiceTs(this.selectedVersion, this.selectedURL
    ).getCapabilitiesGET( (response: CapabilitiesResponse) => {
      this.capabilitiesResponse = response;
    });
  }

  getCapabilitiesPOST() {
    new WpsServiceTs(this.selectedVersion, this.selectedURL
    ).getCapabilitiesPOST( (response: CapabilitiesResponse) => {
      this.capabilitiesResponse = response;
    });
  }
}
