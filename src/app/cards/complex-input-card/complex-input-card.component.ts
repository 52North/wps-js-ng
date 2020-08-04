import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complex-input-card',
  templateUrl: './complex-input-card.component.html',
  styleUrls: ['./complex-input-card.component.css']
})
export class ComplexInputCardComponent implements OnInit {
  title: string;
  input: string;
  type: string;
  mimeTypeFormat: string;
  formatList: any[];
  complexPayload: string;
  selectedMimeTypeFormat: any;

  constructor() { }

  ngOnInit(): void {
  }

}
