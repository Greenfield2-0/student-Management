import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Stud} from "./stud"
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class StudServiceService {

  constructor() { }

  getAll=()=>{
    return axios.get(`http://localhost:5000/api/student`)
  }
  addStudent=(student:Stud)=>{
    return axios.post(`http://localhost:5000/api/student/register`,student)
  }
  updateStudent=(student:Stud, id:String)=>{
    return axios.put(`http://localhost:5000/api/student/update/${id}`,student)
  }
  deleteStudent=(id:String)=>{
    return axios.delete(`http://localhost:5000/api/student/delete/${id}`)
  }
  updateStudName=(student:Stud, id:String)=>{
    return axios.put(`http://localhost:5000/api/student/name/${id}`,student)
  }
  signUp=(name:String,age:Number,email:String,password:String,level:Number)=>{
    return axios.post(`http://localhost:5000/api/student/signup`,{name:name,age:age,email:email,password:password,level:level})
  }
  login=(email:String,password:String)=>{
    return axios.post(`http://localhost:5000/api/student/login`,{email:email,password:password})
  }

}
