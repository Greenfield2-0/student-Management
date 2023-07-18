import { Component } from '@angular/core';
import {Stud} from "../../stud";
import {Router} from '@angular/router'
import {StudServiceService} from "../../stud-service.service"
@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent {
  students:Stud[];

  constructor(private service: StudServiceService,private route:Router) {
  this.students=[]
}

getStudents=()=>{
  this.service.getAll().then((res)=>{
    this.students=res.data
    console.log(res.data)
   }).catch((err)=>{
     console.log(err)
   })

  }

  // getOneStudent=(){
  //   this.service.
  // }
  ngOnInit(){
   this.getStudents()
  }

}
