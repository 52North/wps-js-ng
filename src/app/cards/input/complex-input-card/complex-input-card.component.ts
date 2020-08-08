import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ComplexDataInput, Format} from 'wps-ng';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-complex-input-card',
  templateUrl: './complex-input-card.component.html',
  styleUrls: ['./complex-input-card.component.css']
})
export class ComplexInputCardComponent implements OnInit {
  @Input() title: string;
  @Input() input: string;
  @Input() type: string;
  @Input() formatList: Format[];

  @Output() selectedMimeTypeFormat = new Format({ mimeType : 'text/xml', schema: undefined, encoding: undefined});
  @Output() complexPayload = '<test>hello</test>';
  @Output() messageEvent  = new EventEmitter<any>();
  private readonly complexInput: ComplexDataInput;

  constructor( private toastr: ToastrService) {
     this.complexInput = new ComplexDataInput('complexInput', 'text/xml', null, null, null,
      '<test><test2>hello</test2></test>');
  }

  ngOnInit(): void {
  }

  sendResponse(){
    this.toastr.error('Some Message', 'title');
    this.messageEvent.emit(this.complexInput);
  }

}
