import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './student/login/login.component';
import { LoginTeachComponent } from './teacher/login-teach/login-teach.component';
import { RegisterComponent } from './student/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentHomeComponent,
    WelcomeComponent,
    LoginComponent,
    LoginTeachComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
