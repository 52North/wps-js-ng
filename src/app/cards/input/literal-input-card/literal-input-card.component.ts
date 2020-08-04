import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-literal-input-card',
  templateUrl: './literal-input-card.component.html',
  styleUrls: ['./literal-input-card.component.css']
})
export class LiteralInputCardComponent implements OnInit {
  title: string;
  input: string;
  type: string;
  literalValue: any;

  constructor() { }

  ngOnInit(): void {
  }

}
