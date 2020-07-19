import { Component, OnInit } from '@angular/core';
import {WpsNgService} from "wps-ng";

@Component({
  selector: 'app-status-result',
  templateUrl: './status-result.component.html',
  styleUrls: ['./status-result.component.css']
})
export class StatusResultComponent implements OnInit {
  jobIdStatus: string;
  jobIdResult: string;
  private wpsService: WpsNgService;
  private selectedURL: string;

  constructor() { }

  ngOnInit(): void {
  }

  getStatus() {
    this.wpsService = new WpsNgService('2.0.0', this.selectedURL);
    this.wpsService.getStatus_WPS_2_0((response) => {
      // this.updateRightScreenContents('Get Status Response', response);
    }, this.jobIdStatus);
  }

  getResult() {
    this.wpsService = new WpsNgService('2.0.0', this.selectedURL);
    this.wpsService.getResult_WPS_2_0(response => {
      // this.updateRightScreenContents('Get Result Response', response);
    }, this.jobIdResult);
  }
}
