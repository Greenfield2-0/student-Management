import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private router : Router){
  }
  showStudents = () => {
    this.router.navigate(['/first-component']);
  }
  signUp = () => {
    this.router.navigate(['/register']);
  }
}
