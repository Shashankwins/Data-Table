import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  url = 'http://localhost:3000'

  constructor( private _http: HttpClient ) { }

  getCountries(): Observable<any[]> {
    return this._http.get<any[]>(this.url+'/countries');
  }
  
  getStates(): Observable<any[]> {
    return this._http.get<any[]>(this.url+'/states');
  }
  
  getHeaders(): Observable<any[]> {
    return this._http.get<any[]>(this.url+'/header');
  }
  
  getSubjects(): Observable<any[]> {
    return this._http.get<any[]>(this.url+'/subjects');
  }
  
  getData(): Observable<any[]> {
    return this._http.get<any[]>(this.url+'/data')
  }

  updateData(data : any, id: any) : Observable<any>{
    return this._http.patch<any>(this.url+'/data/'+id, data)
  }
}
