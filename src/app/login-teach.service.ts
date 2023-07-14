import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LoginTeachService {
 
  constructor () { 
    
  }
  getAll=()=>{
  return axios.get<User[]>("http://localhost:5000/api/teachers/")
  }

  add=(user:User)=>{
    return axios.post("http://localhost:5000/api/teachers/",user)
  }
  updtae=(user:User,id:String)=>{
    return axios.put(`http://localhost:5000/api/teachers/${id}`,user)
  }
  delete=(id:String)=>{
    return axios.delete(`http://localhost:5000/api/teachers/${id}`)
  }
  login=(email:String,pw:String)=>{
    return axios.post(`http://localhost:5000/api/teachers/login`,{email:email,password:pw})
  }
  
}
