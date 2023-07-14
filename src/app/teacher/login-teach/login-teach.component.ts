import { Component } from '@angular/core';
import { LoginTeachService } from 'src/app/login-teach.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../user';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login-teach',
  templateUrl: './login-teach.component.html',
  styleUrls: ['./login-teach.component.css']
})
export class LoginTeachComponent {
user:User;

  constructor(private dataservice: LoginTeachService,private route:Router) {
  this.user={
    id:"",
    name:"",
    email:"",
    password:"",
    cours:"" 
  }  
  }
  signIn=()=>{
      this.dataservice.login(this.user.email,this.user.password).
      then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      }) 
  }   
  tosignup=()=>{
    this.route.navigate(['/signUpTeach'])
  }
}