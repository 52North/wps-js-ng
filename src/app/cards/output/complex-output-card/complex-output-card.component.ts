import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complex-output-card',
  templateUrl: './complex-output-card.component.html',
  styleUrls: ['./complex-output-card.component.css']
})
export class ComplexOutputCardComponent implements OnInit {
  title: any;
  type: any;
  transmissionModes: any[];
  selectedTransmissionMode: string;

  constructor() { }

  ngOnInit(): void {
  }

}
