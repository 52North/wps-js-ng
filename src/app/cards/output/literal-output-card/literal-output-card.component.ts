import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LiteralDataOutput} from 'wps-ng';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-literal-output-card',
  templateUrl: './literal-output-card.component.html',
  styleUrls: ['./literal-output-card.component.css']
})
export class LiteralOutputCardComponent implements OnInit {

  @Input() title: string; //
  @Input() type: string;  //
  @Input() transmissionModes: any[]; //

  @Output() selectedTransmissionMode: string;
  @Output() literalValue: any;

  @Output() messageEvent  = new EventEmitter<any>();
  literalDataOutput: LiteralDataOutput;

  constructor( private toastr: ToastrService) {
    this.literalDataOutput = new LiteralDataOutput('literalOutput', 'text/xml', undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined);
  }

  ngOnInit(): void {
  }
  sendResponse(){
    this.toastr.error('Some Message', 'title');
    this.messageEvent.emit(this.literalDataOutput);
  }
}
