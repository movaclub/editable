import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ControlsComponent } from './comps/controls/controls.component';
import { DatumComponent } from './comps/datum/datum.component';

import { ApiService } from './service/api.service';
import { BooleanerPipe } from './pipe/booleaner.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    DatumComponent,
    BooleanerPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
