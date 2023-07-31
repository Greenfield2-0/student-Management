import { Component } from '@angular/core';
import {Stud} from "../../stud";
import {Router} from '@angular/router'
import {StudServiceService} from "../../stud-service.service"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  students:Stud;

  constructor(private service: StudServiceService,private route:Router) {
  this.students={
    id:"",
    name:"",
    age:0,
    email:"",
    password:"",
    level:0
  }
}

signUp=()=>{
  this.service.signUp(this.students.name,this.students.age,this.students.email,this.students.password,this.students.level).then((res)=>{
    this.students=res.data
    console.log(res.data)
    this.route.navigate(['/login']);
   }).catch((err)=>{
     console.log(err)
   })
}
}
