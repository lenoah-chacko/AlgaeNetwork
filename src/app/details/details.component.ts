import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details_holder={
    "name":"",
    "phoneNum":"",
    "email":"",
    "location":""
  }

  valid:number=0;

  constructor(private _data:DataService) { 
  }
  ngOnInit(): void {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var but = document.getElementById("go")
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  }
  registerData(){
    var f = document.getElementsByClassName('form-control rounded-0 ng-pristine ng-invalid');
    if(this.valid>=4 && f.length==0){
      const fd= new FormData
        for ( var key in this.details_holder ) {
            fd.append(key, this.details_holder[key]);
        }
      fd.append('algaeImage',this.selectedFile,this.selectedFile.name)
        this._data.registerData(fd)
          .subscribe(
            res=>console.log(res),
            err=>console.log(err)
          )
          this.show()
    }
  }
  show(){
    var x=document.getElementById("alert");
    if(x.style.display=="none"){
      x.style.display="block";
    }
  }
  checkform(){
    this.valid=this.valid+1;
    console.log("valid="+this.valid)
  }

  selectedFile:File=null
  onFileSelected(event){
    this.selectedFile=<File>event.target.files[0]
  }
}
