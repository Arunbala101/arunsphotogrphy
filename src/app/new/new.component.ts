import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {value} from  './value';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent  {
  @ViewChild ("form1",{static:true})form:NgForm;
  title = 'forms';
  genders=['male','female','others'];
  id:"";
  name:"";
  age:"";
  gender:"";
  mailid:"";
  password:"";
  confirmpassword:"";
  user= new value (this.id,this.name,this.age,this.gender,this.mailid,this.password,this.confirmpassword)
  index;
  a=[];
  submitted=false;
  updated=true;
  constructor(
    private router:Router,
  ) { }

   onsubmit(f:NgForm){
  //  this.router.navigate(['/routingpath']);
    this.a.push(this.user)
    console.log(this.a)
    this.submitted=true;
    console.log(this.form)
   }

   onedit(i:number){
     this.index=i
     this.submitted=false;
     this.user=new value(this.a[i].id,this.a[i].name,this.a[i].age,this.a[i].gender,this.a[i].mailid,this.a[i].password,this.a[i].confirmpassword)
     console.log(this.user)
     this.updated=false;
   }
   onupdate(){
     this.a.splice(this.index,1,this.user)
     this.submitted=true;
     this.updated=true;
   }
   onadd(form:NgForm){
    this.user=new value("","","","","","","");
    // this.form.reset()
    this.submitted=false;  
  }  
   ondelete(i){
         this.a.splice(i,1)
   }
}
