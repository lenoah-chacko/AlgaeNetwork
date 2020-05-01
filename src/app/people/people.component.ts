import { Component, OnInit } from '@angular/core';
import  {PeopleService} from "../people.service"
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from "@angular/router";
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people=[]
  constructor(private _peopleService: PeopleService, private _router:Router) { }

  ngOnInit(): void {
    this._peopleService.getPeople()
      .subscribe(
        res=> this.people=res,
        err=> {
        if(err instanceof HttpErrorResponse){
          if(err.status===401){
            this._router.navigate(['/login'])
          }
        }}
      )
  }

  deleteClient(id:any){
    console.log("Deleting "+id)
    this._peopleService.deleteClient(id)
      .subscribe(data=>{
          for(var i=0;i<this.people.length;i++){
            if(this.people[i]._id==id){
              this.people.splice(i,1)
          }
        }
      },err=>{      }
      )
  }

}
