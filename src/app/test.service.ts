import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Exam } from './Exam';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  url ="http://localhost:9090/exam/" ;

  constructor(private http : HttpClient ) {

  }

  

  getExamList(): Observable<any> {
    return this.http.get<Exam []>(this.url,{ observe: 'response' });
  }

  deleteExamById(examId : number) 
  {
    
    return this.http.delete<Exam>("http://localhost:9090/exam/"+examId);
  }

  findExamById(examId : number) : Observable<Exam>
  {
    
    return this.http.get<Exam>("http://localhost:9090/exam/"+examId);
  }

  addExam(exam : Exam ) : Observable<Exam>
  {
    console.log("Service : "+exam.examId);
    return this.http.post<Exam>("http://localhost:9090/exam",exam);
  }
  updateExam(examId: number, value: any): Observable<Object> {
    return this.http.put(`${this.url}/${examId}`, value);
  }
  getExam(examId: number): Observable<any> {
    return this.http.get(`${this.url}/${examId}`);
  }

}
