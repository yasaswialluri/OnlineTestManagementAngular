import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtestComponent } from './addtest/addtest.component';
import { ListtestComponent } from './listtest/listtest.component';
import { UpdatetestComponent } from './updatetest/updatetest.component';
import { TestdetailsComponent } from './testdetails/testdetails.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { ListquestionComponent } from './listquestion/listquestion.component';
import { UpdatequestionComponent } from './updatequestion/updatequestion.component';
import { QuestiondetailComponent } from './questiondetail/questiondetail.component';
import { AssigntestComponent } from './assigntest/assigntest.component';
import { ListassigntestComponent } from './listassigntest/listassigntest.component';
import { TaketestComponent } from './taketest/taketest.component';
import { AssignedtestComponent } from './assignedtest/assignedtest.component';
import { AssignedquestionComponent } from './assignedquestion/assignedquestion.component';
import { ResultComponent } from './result/result.component';
import { ViewresultComponent } from './viewresult/viewresult.component';



const routes: Routes = [
  { path: 'addtest', component: AddtestComponent },
  { path: 'list', component: ListtestComponent},
  { path: 'updatetest/:examId', component: UpdatetestComponent },
  { path: 'testdetail/:examId', component: TestdetailsComponent },
  { path: 'addquestion/:examId', component: AddquestionComponent },
  { path: 'listquestion/:examId', component: ListquestionComponent },
  { path: 'updatequestion/:questionId', component: UpdatequestionComponent},
  { path: 'questiondetail/:questionId', component: QuestiondetailComponent},
  { path: 'assigntest', component: AssigntestComponent},
  { path: 'listassigntest', component: ListassigntestComponent},
  { path: 'taketest', component: TaketestComponent},
  { path: 'assignedtest/:userId', component: AssignedtestComponent},
  { path: 'assignedquestion/:examId/:userId', component: AssignedquestionComponent},
  { path: 'result/:mark/:examId/:correctAnswer/:wrongAnswer/:userid', component: ResultComponent},
  { path: 'viewresult', component: ViewresultComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
