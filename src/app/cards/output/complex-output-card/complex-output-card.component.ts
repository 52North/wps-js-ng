import {Component, Input, OnInit, Output} from '@angular/core';
import {Format} from 'wps-ng';

@Component({
  selector: 'app-complex-output-card',
  templateUrl: './complex-output-card.component.html',
  styleUrls: ['./complex-output-card.component.css']
})
export class ComplexOutputCardComponent implements OnInit {
  @Input() title: any;
  @Input() type: any;
  @Input() transmissionModes: any[];
  @Input() formatList: Format[];

  @Output() selectedTransmissionMode: string;
  @Output() selectedMimeTypeFormat: string;

  constructor() { }

  ngOnInit(): void {
  }

}
