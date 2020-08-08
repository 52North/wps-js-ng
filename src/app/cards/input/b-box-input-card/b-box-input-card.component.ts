import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {BBoxDataInput, Format} from 'wps-ng';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-b-box-input-card',
  templateUrl: './b-box-input-card.component.html',
  styleUrls: ['./b-box-input-card.component.css']
})
export class BBoxInputCardComponent implements OnInit {

  @Input() title: string;
  @Input() input: string;
  type = 'B-Box Input';
  @Input() formatList: Format[];
  @Input() crsList: string[];

  @Output() selectedMimeTypeFormat: string;
  @Output() selectedCoordinateReferenceSystem: string;
  boundingBoxInput: BBoxDataInput;
  @Output() messageEvent  = new EventEmitter<any>();


  constructor( private toastr: ToastrService) {
    this.boundingBoxInput = new BBoxDataInput('boundingboxInput', 'EPSG:4326', '2',
    '-14.093957177836224 -260.2059521933809', '-14.00869637063467 -260.2059521933809');
  }

  ngOnInit(): void {
  }

  sendResponse(){
    this.toastr.error('Some Message', 'title');
    this.messageEvent.emit(this.boundingBoxInput);
  }



}
