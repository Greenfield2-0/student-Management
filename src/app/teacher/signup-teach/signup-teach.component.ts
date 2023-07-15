import { Component } from '@angular/core';
import { LoginTeachService } from 'src/app/login-teach.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../user';
import {Router} from '@angular/router'
@Component({
  selector: 'app-signup-teach',
  templateUrl: './signup-teach.component.html',
  styleUrls: ['./signup-teach.component.css']
})
export class SignupTeachComponent {
  user:User;
  constructor(private signupService:LoginTeachService){
    this.user={
      id:"",
      name:"",
      email:"",
      password:"",
      cours:"" 
    }  
  }
  signup=()=>{
    this.signupService.signUp(this.user.name,this.user.email,this.user.password).
    then((res)=>{
     console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }


}
