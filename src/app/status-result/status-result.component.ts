import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ResultResponse, StatusResponse, WpsNgService} from 'wps-ng';

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
  @Output() statusEvent  = new EventEmitter<StatusResponse>();
  @Output() resultEvent  = new EventEmitter<ResultResponse>();
  private resultResponse: ResultResponse;
  private statusResponse: StatusResponse;

  constructor() { }

  ngOnInit(): void {
  }

  getStatus() {
    this.wpsService = new WpsNgService('2.0.0', this.selectedURL);
    this.wpsService.getStatus_WPS_2_0((response: StatusResponse) => {
      console.log(response);
      this.sendStatusResponse();
    }, this.jobIdStatus);
  }

  getResult() {
    this.wpsService = new WpsNgService('2.0.0', this.selectedURL);
    this.wpsService.getResult_WPS_2_0((response: ResultResponse) => {
      console.log(response);
      this.sendResultResponse();
      this.resultResponse = response;
    }, this.jobIdResult);
  }


  sendStatusResponse(){
    this.statusEvent.emit(this.statusResponse);
  }

  sendResultResponse(){
    this.resultEvent.emit(this.resultResponse);
  }

}
