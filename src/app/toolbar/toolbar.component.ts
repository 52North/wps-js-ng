import { Component, OnInit } from '@angular/core';
import {MatSelectChange} from '@angular/material/select';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  selected: any;

  constructor( private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  languageChange($event: MatSelectChange) {

  }
}
