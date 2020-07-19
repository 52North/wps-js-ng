import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WpsExampleComponent } from './wps-example/wps-example.component';
import {FormsModule} from '@angular/forms';
import {ExecuteExamplesComponent } from './execute-examples/execute-examples.component';
import {WpsNgModule} from 'wps-ng';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CapabilitiesComponent } from './capabilities/capabilities.component';
import { ProcessDescriptionComponent } from './process-description/process-description.component';
import { ExecuteProcessComponent } from './execute-process/execute-process.component';
import { StatusResultComponent } from './status-result/status-result.component';

@NgModule({
  declarations: [
    AppComponent,
    WpsExampleComponent,
    ExecuteExamplesComponent,
    ToolbarComponent,
    CapabilitiesComponent,
    ProcessDescriptionComponent,
    ExecuteProcessComponent,
    StatusResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    WpsNgModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
