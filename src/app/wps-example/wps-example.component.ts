import { Component, OnInit } from '@angular/core';
import {WpsServiceTs} from '../wps-service-ts';
import {Settings} from '../core/settings';
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
  title: string;

  getCapabilitiesGet(callback: (capabilitiesResponse: CapabilitiesResponse) => void) {
  }

  ngOnInit(): void {
  }
}
