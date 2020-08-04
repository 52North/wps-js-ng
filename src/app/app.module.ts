import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WpsExampleComponent } from './wps-example/wps-example.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { BBoxInputCardComponent } from './cards/input/b-box-input-card/b-box-input-card.component';
import { ComplexInputCardComponent } from './cards/input/complex-input-card/complex-input-card.component';
import { LiteralInputCardComponent } from './cards/input/literal-input-card/literal-input-card.component';
import { BBoxOutputCardComponent } from './cards/output/b-box-output-card/b-box-output-card.component';
import { LiteralOutputCardComponent } from './cards/output/literal-output-card/literal-output-card.component';
import { ComplexOutputCardComponent } from './cards/output/complex-output-card/complex-output-card.component';
import {MatInputModule} from '@angular/material/input';
import {XmlPipe} from './xml-pipe';
import {ToastrModule} from "ngx-toastr";
import { ParseStoredExecuteResponseComponent } from './parse-stored-execute-response/parse-stored-execute-response.component';

@NgModule({
  declarations: [
    AppComponent,
    WpsExampleComponent,
    ExecuteExamplesComponent,
    ToolbarComponent,
    CapabilitiesComponent,
    ProcessDescriptionComponent,
    ExecuteProcessComponent,
    StatusResultComponent,
    BBoxInputCardComponent,
    ComplexInputCardComponent,
    LiteralInputCardComponent,
    BBoxOutputCardComponent,
    LiteralOutputCardComponent,
    ComplexOutputCardComponent,
    XmlPipe,
    ParseStoredExecuteResponseComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        WpsNgModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSelectModule,
        FlexLayoutModule,
        MatInputModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
