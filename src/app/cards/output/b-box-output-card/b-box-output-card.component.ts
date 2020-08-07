import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BBoxDataOutput} from 'wps-ng';

@Component({
  selector: 'app-b-box-output-card',
  templateUrl: './b-box-output-card.component.html',
  styleUrls: ['./b-box-output-card.component.css']
})
export class BBoxOutputCardComponent implements OnInit {
  @Input() title: string;
  @Input() type: string;
  @Input() transmissionModes: string[];

  @Output() selectedTransmissionMode: string;

  @Output() messageEvent  = new EventEmitter<any>();
  bboxOutput: BBoxDataOutput;
  sendResponse(){
    this.messageEvent.emit(this.bboxOutput);
  }

  constructor() {  this.bboxOutput =  new BBoxDataOutput('boundingboxOutput', 'text/xml', undefined,
    undefined, 'EPSG:4326', undefined, undefined, undefined);
  }

  ngOnInit(): void {
  }

}
