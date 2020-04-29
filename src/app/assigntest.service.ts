import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AssignExam } from './assignexam';

@Injectable({
  providedIn: 'root'
})
export class AssigntestService {
  url ="http://localhost:9090/assign/" ;
  constructor(private http : HttpClient ) { }
  assignExam(examId:number,userId:number,assignExam : AssignExam ) : Observable<AssignExam>
  {
    //console.log("Service : "+test.testId);
    return this.http.post<AssignExam>("http://localhost:9090/assign/exam/"+examId+"/user/"+userId,assignExam);
  }
  updateAssignExam(assignExam : AssignExam,userId: number,examId:number,mark:number,status:String ) : Observable<AssignExam>
  {
    //console.log("Service : "+test.testId);
    return this.http.put<AssignExam>("http://localhost:9090/assign/exam/"+examId+"/user/"+userId+"/mark/"+mark,assignExam);
  }
  AssignedExamList(): Observable<any> {
    return this.http.get<AssignExam []>(this.url,{ observe: 'response' });
    
  }
  deleteAssignedExam(examUserId : number) 
  {
    
    return this.http.delete<AssignExam>("http://localhost:9090/assign/"+examUserId);
  }

  checkAssignedExam(userId:number): Observable<any>
  {
    return this.http.get<AssignExam[]>("http://localhost:9090/assign/"+userId);
  }

  check(userId:number,examId:number): Observable<any>
  {
    return this.http.get<AssignExam>("http://localhost:9090/assign/user/"+userId+"/exam/"+examId);
  }
  
}
