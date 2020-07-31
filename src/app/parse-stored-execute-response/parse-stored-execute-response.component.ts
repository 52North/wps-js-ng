import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ExecuteResponse, WpsNgService} from 'wps-ng';
import {CapabilitiesDataService} from '../capabilities-data.service';

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

  constructor(private capabilitiesDataService: CapabilitiesDataService, private fb: FormBuilder) {
    const reg = 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)';
    this.form = fb.group({
      url: ['', [Validators.required, Validators.pattern(reg)]]
    });

    this.capabilitiesDataService.selectedUrl.subscribe(e => this.selectedURL = e);
    this.wpsService = new WpsNgService(this.selectedVersion, this.selectedURL);
  }

  ngOnInit(): void {
  }
  get f(){
    return this.form.controls;
  }

  submit(){
    this.wpsService.parseStoredExecuteResponse_WPS_1_0( (response: ExecuteResponse) => {
      console.log(response);
    } , this.form.value.url);

  }
}
