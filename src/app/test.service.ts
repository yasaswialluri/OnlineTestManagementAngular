import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from './test';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http : HttpClient) { }
  getTestList(): Observable<any> {
    return this.http.get<Test []>("http://localhost:8050/test/",{ observe: 'response' });
  }

  deleteTestById(testId : number) 
  {
    
    return this.http.delete<Test>("http://localhost:8050/test/"+testId);
  }

  getTestInCenter(centerId:number) :Observable<any>
  {
    return this.http.get<Test []>("http://localhost:8050/test/"+centerId,{ observe: 'response' });
  }

}
