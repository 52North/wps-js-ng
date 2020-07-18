import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WpsExampleComponent } from './wps-example/wps-example.component';
import {FormsModule} from '@angular/forms';
import { ExecuteExamplesComponent } from './execute-examples/execute-examples.component';
import {WpsNgModule} from 'wps-ng';

@NgModule({
  declarations: [
    AppComponent,
    WpsExampleComponent,
    ExecuteExamplesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    WpsNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
