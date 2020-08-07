import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BBoxDataOutput, ComplexDataOutput, Format} from 'wps-ng';

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
  sendResponse(){
    this.messageEvent.emit(this.complexDataOutput);
  }

  constructor() {
    this.complexDataOutput = new ComplexDataOutput('complexOutput', 'text/xml', undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, 'value');
  }

  ngOnInit(): void {
  }

}
