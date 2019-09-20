import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ControlsComponent } from './comps/controls/controls.component';
import { DatumComponent } from './comps/datum/datum.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    DatumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
