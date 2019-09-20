import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ControlsComponent } from './comps/controls/controls.component';
import { DatumComponent } from './comps/datum/datum.component';

import { ApiService } from './service/api.service';
import { ControlService } from './service/control.service';
import { TabularService } from './service/tabular.service';

@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    DatumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    ControlService,
    TabularService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
