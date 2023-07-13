import { Component } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import {Router} from '@angular/router'
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor (private router : Router){
  }
  navigateToStudent = () => {
    this.router.navigate(['/login']);
  }
}
