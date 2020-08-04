import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-complex-output-card',
  templateUrl: './complex-output-card.component.html',
  styleUrls: ['./complex-output-card.component.css']
})
export class ComplexOutputCardComponent implements OnInit {
  @Input() title: any;
  @Input() type: any;
  @Input() transmissionModes: any[];

  @Output() selectedTransmissionMode: string;

  constructor() { }

  ngOnInit(): void {
  }

}
