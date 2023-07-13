import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { AppComponent } from './app.component';
import {WelcomeComponent} from './welcome/welcome.component'
import { LoginComponent } from './student/login/login.component';
const routes: Routes = [
  {path: '', component: WelcomeComponent },
  {path:'login', component: LoginComponent },
  {path: 'first-component', component: StudentHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
