import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './question';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  url ="http://localhost:9090/question/" ;
  constructor(private http : HttpClient ) {

  }

  

  getQuestionList(id:number): Observable<any> {
    return this.http.get<Question []>("http://localhost:9090/questions/exam/"+id,{ observe: 'response' });
  }

  deleteQuestionById(questionId : number) 
  {
    
    return this.http.delete<Question>("http://localhost:9090/question/"+questionId);
  }

  findQuestionById(questionId : number) : Observable<Question>
  {
    
    return this.http.get<Question>("http://localhost:9090/question/"+questionId);
  }

  getQuestion(questionId: number): Observable<any> {
    return this.http.get("http://localhost:9090/question/"+questionId);
  }

  addQuestion(examId:number,question : Question ) : Observable<Question>
  {
    
    return this.http.post<Question>("http://localhost:9090/questions/exam/"+examId,question);
  }
  updateQuestion(questionId: number, value: any,examId:number): Observable<Object> {
    return this.http.put("http://localhost:9090/questions/exam/"+examId+"/question/"+questionId, value);
  }
  
}
