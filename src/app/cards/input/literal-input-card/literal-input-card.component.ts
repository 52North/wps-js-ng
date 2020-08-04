import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-literal-input-card',
  templateUrl: './literal-input-card.component.html',
  styleUrls: ['./literal-input-card.component.css']
})
export class LiteralInputCardComponent implements OnInit {
  @Input() title: string;
  @Input() input: string;
  @Input() type: string;

  @Output() literalValue: number;

  constructor() { }

  ngOnInit(): void {
  }

}
