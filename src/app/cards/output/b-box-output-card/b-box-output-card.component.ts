import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-b-box-output-card',
  templateUrl: './b-box-output-card.component.html',
  styleUrls: ['./b-box-output-card.component.css']
})
export class BBoxOutputCardComponent implements OnInit {
  @Input() title: string;
  @Input() type: string;
  @Input() transmissionModes: string[];

  @Output() selectedTransmissionMode: string;

  constructor() { }

  ngOnInit(): void {
  }

}
