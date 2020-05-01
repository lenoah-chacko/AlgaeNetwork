import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _registerUrl="/api/data"
  constructor(private http:HttpClient) { }
  registerData(user){
    return this.http.post<any>(this._registerUrl,user)
  }
}
