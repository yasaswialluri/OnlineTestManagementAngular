import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DiagnoscticCenter } from './center';
@Injectable({
  providedIn: 'root'
})
export class DiagnosticcenterService {

  constructor(private http : HttpClient) { }
  getTestList(): Observable<any> {
    return this.http.get<DiagnoscticCenter []>("http://localhost:8050/center/",{ observe: 'response' });
  }
}
