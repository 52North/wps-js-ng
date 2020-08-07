import {Component, OnInit, Input, Output} from '@angular/core';
import {Format} from 'wps-ng';

@Component({
  selector: 'app-complex-input-card',
  templateUrl: './complex-input-card.component.html',
  styleUrls: ['./complex-input-card.component.css']
})
export class ComplexInputCardComponent implements OnInit {
  @Input() title: string;
  @Input() input: string;
  @Input() type: string;
  @Input() formatList: Format[];

  @Output() selectedMimeTypeFormat: string;
  @Output() complexPayload: string;

  constructor() { }

  ngOnInit(): void {
  }

}
