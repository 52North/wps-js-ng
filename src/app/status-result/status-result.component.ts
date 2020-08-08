import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ResultResponse, StatusResponse, WpsNgService} from 'wps-ng';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-status-result',
  templateUrl: './status-result.component.html',
  styleUrls: ['./status-result.component.css']
})
export class StatusResultComponent implements OnInit {
  jobIdStatus: string;
  jobIdResult: string;
  private wpsService: WpsNgService;
  selectedURL = 'http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService';
  @Output() statusEvent  = new EventEmitter<StatusResponse>();
  @Output() resultEvent  = new EventEmitter<ResultResponse>();
  private resultResponse: ResultResponse;
  private statusResponse: StatusResponse;
  urls: string[];

  constructor( private toastr: ToastrService) { }

  ngOnInit(): void {
    this.urls = [
      'http://geoprocessing.demo.52north.org:8080/javaps/service',
      'http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService',
      'https://ows.terrestris.de/deegree-wps/services',
      'http://zoo-project.org/cgi-bin/zoo_loader.cgi',
      'https://maps.dwd.de/geoserver/ows',
      'https://riesgos.52north.org/wps/WebProcessingService'
    ];
  }

  getStatus() {
    this.wpsService = new WpsNgService('2.0.0', this.selectedURL);
    this.wpsService.getStatus_WPS_2_0((response: StatusResponse) => {
      this.toastr.success('Status Response Received', 'Get Status');
      this.statusResponse = response;
      this.sendStatusResponse();
    }, this.jobIdStatus);
  }

  getResult() {
    this.wpsService = new WpsNgService('2.0.0', this.selectedURL);
    this.wpsService.getResult_WPS_2_0((response: ResultResponse) => {
      this.toastr.success('Result Response Received', 'Get Result');
      this.resultResponse = response;
      this.sendResultResponse();
    }, this.jobIdResult);
  }


  sendStatusResponse(){
    this.statusEvent.emit(this.statusResponse);
  }

  sendResultResponse(){
    this.resultEvent.emit(this.resultResponse);
  }

}
