import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-box-input-card',
  templateUrl: './b-box-input-card.component.html',
  styleUrls: ['./b-box-input-card.component.css']
})
export class BBoxInputCardComponent implements OnInit {
  title: string;
  input: any;
  type: string;
  mimeTypeFormat: any;
  formatList: any[];
  selectedCoordinateReferenceSystem: any;
  crsList: any;

  constructor() { }

  ngOnInit(): void {
  }

}
