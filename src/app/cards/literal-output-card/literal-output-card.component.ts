import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-literal-output-card',
  templateUrl: './literal-output-card.component.html',
  styleUrls: ['./literal-output-card.component.css']
})
export class LiteralOutputCardComponent implements OnInit {
  title: string;
  type: string;
  literalValue: any;
  transmissionModes: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
