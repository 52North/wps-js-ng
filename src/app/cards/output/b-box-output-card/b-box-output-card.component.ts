import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-box-output-card',
  templateUrl: './b-box-output-card.component.html',
  styleUrls: ['./b-box-output-card.component.css']
})
export class BBoxOutputCardComponent implements OnInit {
  title: any;
  type: any;
  transmissionModes: any[];
  selectedTransmissionMode: string;

  constructor() { }

  ngOnInit(): void {
  }

}
