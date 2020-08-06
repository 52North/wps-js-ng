import {Component, Input, OnInit, Output} from '@angular/core';
import {LiteralDataDomains} from 'wps-ng';

@Component({
  selector: 'app-literal-input-card',
  templateUrl: './literal-input-card.component.html',
  styleUrls: ['./literal-input-card.component.css']
})
export class LiteralInputCardComponent implements OnInit {
  @Input() title: string;
  @Input() input: string;
  @Input() literalDataDomains: LiteralDataDomains[];
  type: LiteralDataDomains[];

  @Output() literalValue: number;

  constructor() { }

  ngOnInit(): void {
    if (this.literalDataDomains !== undefined){
      this.type = this.literalDataDomains;
    }
  }

}
