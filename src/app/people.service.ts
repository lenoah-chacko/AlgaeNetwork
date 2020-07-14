import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private _peopleUrl="https://algae-network.herokuapp.com/api/people/";
  constructor(private http: HttpClient) { }

  getPeople(){
    return this.http.get<any>(this._peopleUrl)
  }
  
  deleteClient(id){
    console.log(id)
    return this.http.delete(this._peopleUrl+id)
  }
}
