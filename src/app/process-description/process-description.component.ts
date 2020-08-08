import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CapabilitiesResponse, ProcessDescriptionResponse, WpsNgService} from 'wps-ng';
import {CapabilitiesDataService} from '../capabilities-data.service';
import {ToastrService} from 'ngx-toastr';

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

  constructor(private capabilitiesDataService: CapabilitiesDataService,  private toastr: ToastrService) { }

  ngOnInit(): void {
    this.wpsService = new WpsNgService(this.selectedVersion, this.selectedUrl);
    console.log(this.selectedUrl + this.selectedVersion + this.capabilitiesResponse);
    this.capabilitiesDataService.currentCapabilitiesResponse.subscribe( e => this.capabilitiesResponse = e);
    this.capabilitiesDataService.selectedUrl.subscribe( e => this.selectedUrl = e);
    this.capabilitiesDataService.selectedVersion.subscribe( e => this.selectedVersion = e);

  }


  processDescriptionGet() {
    this.wpsService = new WpsNgService(this.selectedVersion, this.selectedUrl);
    this.wpsService.processDescriptionGet(this.selectedProcessIdentifier, (e: ProcessDescriptionResponse) => {
      this.toastr.success('Process Description Response Received', 'Process Description');
      console.log(e);
      this.processDescriptionResponse = e;
      this.sendResponse();
    });
  }

  processDescriptionPost(){
    this.wpsService = new WpsNgService(this.selectedVersion, this.selectedUrl);
    this.wpsService.processDescriptionPost(this.selectedProcessIdentifier, (e: ProcessDescriptionResponse) => {
      this.toastr.success('Process Description Response Received', 'Process Description');
      console.log(e);
      this.processDescriptionResponse = e;
      this.sendResponse();
    });
  }

  sendResponse(){
    this.messageEvent.emit(this.processDescriptionResponse);
  }


}
