import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BBoxDataOutput, ComplexDataOutput, Format} from 'wps-ng';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-complex-output-card',
  templateUrl: './complex-output-card.component.html',
  styleUrls: ['./complex-output-card.component.css']
})
export class ComplexOutputCardComponent implements OnInit {
  @Input() title: any;
  @Input() type: any;
  @Input() transmissionModes: any[];
  @Input() formatList: Format[];

  @Output() selectedTransmissionMode: string;
  @Output() selectedMimeTypeFormat: string;
  @Output() messageEvent  = new EventEmitter<any>();
  complexDataOutput: ComplexDataOutput;

  constructor( private toastr: ToastrService) {
    this.complexDataOutput = new ComplexDataOutput('complexOutput', 'text/xml', undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, 'value');
  }

  ngOnInit(): void {
  }
  sendResponse(){
    this.toastr.error('Some Message', 'title');
    this.messageEvent.emit(this.complexDataOutput);
  }
}
