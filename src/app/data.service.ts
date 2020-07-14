import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _registerUrl="http://localhost:3000.com/api/data"
  constructor(private http:HttpClient) { }
  registerData(user){
    return this.http.post<any>(this._registerUrl,user)
  }
}
