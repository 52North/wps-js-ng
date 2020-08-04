import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-literal-output-card',
  templateUrl: './literal-output-card.component.html',
  styleUrls: ['./literal-output-card.component.css']
})
export class LiteralOutputCardComponent implements OnInit {

  @Input() title: string;
  @Input() type: string;
  @Input() transmissionModes: any[];

  @Output() selectedTransmissionMode: string;
  @Output() literalValue: any;

  constructor() { }

  ngOnInit(): void {
  }

}
