import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CapabilitiesResponse, ProcessDescriptionResponse, WpsNgService} from 'wps-ng';
import {CapabilitiesDataService} from '../capabilities-data.service';

@Component({
  selector: 'app-process-description',
  templateUrl: './process-description.component.html',
  styleUrls: ['./process-description.component.css']
})
export class ProcessDescriptionComponent implements OnInit {
  @Input() selectedVersion: string;
  @Input() selectedUrl: string;
  @Input() capabilitiesResponse: CapabilitiesResponse;
  @Input() selectedProcessIdentifier: string;
  private wpsService: WpsNgService;
  private processDescriptionResponse: ProcessDescriptionResponse;
  @Output() messageEvent  = new EventEmitter<any>();

  constructor(private capabilitiesDataService: CapabilitiesDataService) { }

  ngOnInit(): void {
    this.wpsService = new WpsNgService(this.selectedVersion, this.selectedUrl);
    console.log(this.selectedUrl + this.selectedVersion + this.capabilitiesResponse);
    this.capabilitiesDataService.currentCapabilitiesResponse.subscribe( e => this.capabilitiesResponse = e);
  }


  processDescriptionGet() {
    this.wpsService.processDescriptionGet(this.selectedProcessIdentifier, (e: ProcessDescriptionResponse) => {
      console.log(e);
      this.processDescriptionResponse = e;
      this.sendResponse();
    });
  }

  processDescriptionPost(){
    this.wpsService.processDescriptionPost(this.selectedProcessIdentifier, (e: ProcessDescriptionResponse) => {
      console.log(e);
      this.processDescriptionResponse = e;
      this.sendResponse();
    });
  }

  sendResponse(){
    this.messageEvent.emit(this.processDescriptionResponse);
  }


}
