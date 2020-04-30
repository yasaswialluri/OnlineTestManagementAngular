import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewtestComponent } from './viewtest/viewtest.component';
import { HttpClientModule }  from '@angular/common/http';
import { ViewdiagnosticcenterComponent } from './viewdiagnosticcenter/viewdiagnosticcenter.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewtestComponent,
    ViewdiagnosticcenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
