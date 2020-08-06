import {Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-b-box-input-card',
  templateUrl: './b-box-input-card.component.html',
  styleUrls: ['./b-box-input-card.component.css']
})
export class BBoxInputCardComponent implements OnInit {

  @Input() title: string;
  @Input() input: string;
  type = 'B-Box Input';
  @Input() formatList: string[];
  @Input() crsList: string[];

  @Output() selectedMimeTypeFormat: string;
  @Output() selectedCoordinateReferenceSystem: string;

  constructor() { }

  ngOnInit(): void {
  }

}
