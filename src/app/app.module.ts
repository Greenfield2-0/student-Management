import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './student/login/login.component';
import { LoginTeachComponent } from './teacher/login-teach/login-teach.component';
import { RegisterComponent } from './student/register/register.component';
import { SignupTeachComponent } from './teacher/signup-teach/signup-teach.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentHomeComponent,
    WelcomeComponent,
    LoginComponent,
    LoginTeachComponent,
    RegisterComponent,
    SignupTeachComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
