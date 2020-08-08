import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ExecuteResponse, WpsNgService} from 'wps-ng';
import {CapabilitiesDataService} from '../capabilities-data.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-parse-stored-execute-response',
  templateUrl: './parse-stored-execute-response.component.html',
  styleUrls: ['./parse-stored-execute-response.component.css']
})
export class ParseStoredExecuteResponseComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  wpsService: WpsNgService;
  private selectedVersion: string;
  private selectedURL: string;
  @Output() messageEvent  = new EventEmitter<any>();
  private executeResponse: ExecuteResponse;


  constructor(private capabilitiesDataService: CapabilitiesDataService, private fb: FormBuilder,  private toastr: ToastrService) {
    const reg = 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)';
    this.form = fb.group({
      url: ['', [Validators.required, Validators.pattern(reg)]]
    });


  }

  ngOnInit(): void {
    this.capabilitiesDataService.selectedUrl.subscribe(e => this.selectedURL = e);
    this.wpsService = new WpsNgService(this.selectedVersion, this.selectedURL);
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.wpsService.parseStoredExecuteResponse_WPS_1_0( (response: ExecuteResponse) => {
      this.toastr.success('Execute Response Received', 'Execute');
      console.log(response);
      this.executeResponse = response;
      this.sendResponse();
    } , this.form.value.url);

  }

  sendResponse(){
    this.messageEvent.emit(this.executeResponse);
  }
}
