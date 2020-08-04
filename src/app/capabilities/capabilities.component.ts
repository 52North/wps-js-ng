import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CapabilitiesResponse, WpsNgService} from 'wps-ng';
import {CapabilitiesDataService} from '../capabilities-data.service';
<<<<<<< HEAD
=======
import {ToastrService} from 'ngx-toastr';
>>>>>>> 4238f6d9189d349c3cf7c1bca567fe08a6f71b4e

@Component({
  selector: 'app-capabilities',
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.css']
})
export class CapabilitiesComponent implements OnInit {
  @Input() urls: string[];
  @Input() versions: string[];
  selectedURL = 'http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService';
  selectedVersion = '1.0.0';
  selectedProcessIdentifier: string;
  capabilitiesResponse: CapabilitiesResponse;
  private wpsService: WpsNgService;
  @Output() messageEvent  = new EventEmitter<any>();


  constructor(private capabilitiesDataService: CapabilitiesDataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.wpsService = new WpsNgService( this.selectedVersion, this.selectedURL);
    this.capabilitiesDataService.currentCapabilitiesResponse.subscribe( message => {this.capabilitiesResponse = message; } );
    this.capabilitiesDataService.selectedUrl.subscribe( e => this.selectedURL = e);
    this.capabilitiesDataService.selectedVersion.subscribe( e => this.selectedVersion = e);
  }

  getCapabilitiesGET() {
    this.wpsService = new WpsNgService(this.selectedVersion, this.selectedURL);
    this.wpsService.getCapabilitiesGET( (e: CapabilitiesResponse) => {
      console.log(e);
      this.capabilitiesResponse = e;
      this.sendResponse();
      this.capabilitiesDataService.changeCapabilitiesResponse(e, this.selectedVersion, this.selectedURL);
    });
  }

  getCapabilitiesPOST() {
    this.wpsService = new WpsNgService(this.selectedVersion, this.selectedURL);
    this.wpsService.getCapabilitiesPOST( (e: CapabilitiesResponse) => {
      console.log(e);
      this.capabilitiesResponse = e;
      this.sendResponse();
      this.capabilitiesDataService.changeCapabilitiesResponse(e, this.selectedVersion, this.selectedURL);
    });
  }

  sendResponse(){
    this.messageEvent.emit(this.capabilitiesResponse);
  }

  showExampleError() {
    this.toastr.error('Some Message', 'title');
  }
}
