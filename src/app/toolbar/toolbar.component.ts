import { Component, OnInit } from '@angular/core';
import {MatSelectChange} from '@angular/material/select';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  selected: any;

  constructor() { }

  ngOnInit(): void {
  }

  languageChange($event: MatSelectChange) {

  }
}
