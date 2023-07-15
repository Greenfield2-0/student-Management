var student = require("../model/students")

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const getAll=async(req,res)=>{
    try{
        const stud = await student.find()  
        res.json(stud)
        const hashedPassword = await bcrypt.hash(password, 10);
      }
      catch (err) {
        res.status(500).send(err)
      }
}

const register = async(req,res)=>{
    try {
        const {name,age,email,password,level}=req.body
        const stud = await student.create({name,age,email,password,level})
        res.status(201).send("student added")
    }
    catch (err) {
        res.status(409).send(err)
    }
}

const updateProfile = async (req,res)=>{
    try {
        const {id}= req.params
        const {name,age,email,password,level}=req.body
        const stud = await student.findByIdAndUpdate(id,{name,age,email,password,level})
        res.status(200).send("student updated")
    }
    catch (err) {
        res.status(408).send(err)
    }
}

const deleteStudent = async (req,res)=>{
    try {
        const {id}= req.params
        const stud = await student.findByIdAndDelete(id)
        res.status(204).send("student deleted")
    }
    catch (err) {
        res.status(404).send(err)
    }
}

const updateName = async (req,res)=>{
    try {
        const name=req.body
        const id = req.params.id
        const stud= await student.findByIdAndUpdate(id,name)
        res.status(200).send("name updated")
    }
    catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
}

const getOne = async (req,res)=>{
    try {
        const stud  = await student.findOne({name:req.params.name})
        res.json(stud)
    }
    catch (err) {
        res.status(500).send(err)
    }
}



module.exports= {
    getAll,
    register,
    updateProfile,
    deleteStudent,
    getOne,
    updateName
}