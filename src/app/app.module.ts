import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListtestComponent } from './listtest/listtest.component';
import { AddtestComponent } from './addtest/addtest.component';
import { UpdatetestComponent } from './updatetest/updatetest.component';
import { TestdetailsComponent } from './testdetails/testdetails.component';
import {  FormsModule }  from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http';
import { ListquestionComponent } from './listquestion/listquestion.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { UpdatequestionComponent } from './updatequestion/updatequestion.component';
import { QuestiondetailComponent } from './questiondetail/questiondetail.component';
import { AssigntestComponent } from './assigntest/assigntest.component';
import { ListassigntestComponent } from './listassigntest/listassigntest.component';
import { TaketestComponent } from './taketest/taketest.component';
import { AssignedtestComponent } from './assignedtest/assignedtest.component';
import { AssignedquestionComponent } from './assignedquestion/assignedquestion.component';
import { ResultComponent } from './result/result.component';
import { ViewresultComponent } from './viewresult/viewresult.component';




@NgModule({
  declarations: [
    AppComponent,
    ListtestComponent,
    AddtestComponent,
    UpdatetestComponent,
    TestdetailsComponent,
    ListquestionComponent,
    AddquestionComponent,
    UpdatequestionComponent,
    QuestiondetailComponent,
    AssigntestComponent,
    ListassigntestComponent,
   
    TaketestComponent,
   
    AssignedtestComponent,
   
    AssignedquestionComponent,
   
    ResultComponent,
   
    ViewresultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
