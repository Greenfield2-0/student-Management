import { Component } from '@angular/core';
import {Stud} from "../../stud";
import {Router} from '@angular/router'
import {StudServiceService} from "../../stud-service.service"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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
login=()=>{
  this.service.login(this.students.email,this.students.password).
  then((res)=>{
    this.students=res.data
    console.log(res)
    this.route.navigate(['/first-component']);
  })
  .catch((err)=>{
    console.log(err)
  }) 
} 

  signUp = () => {
    this.route.navigate(['/register']);
  }
}
