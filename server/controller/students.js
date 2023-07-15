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

const signUp= async(req,res)=>{
    try{
        const {name,age,email,password,level}=req.body
        const stud= await student.findOne({email:email})
        if(stud){
            res.send("email mawjood")
        }
        else{
            const hashedPwd = await bcrypt.hash(password,10)
            const students = await student.create({name,age,email,password:hashedPwd,level})
            const token = jwt.sign({id:students.id,email:email},"sudentToken")
            res.status(200).send({students,token})
        }
    }
    catch (err) {
        console.log(err)
        return res.status(400).send({ message: err.message });
      }
}
const login = async(req,res)=>{
    try{
            const { email, password } = req.body;
            const user = await student.findOne({ email });
            if (!user) {
              return res
                .status(400)
                .send({ message: "Wrong Email or Password", status: false });
            }
        
            const match = await bcrypt.compare(password,user.password);
        
            if (!match) {
              return res
                .status(400)
                .send({ message: "Wrong Email or Password", status: false });
            }
        
            const token = jwt.sign({user},"sudentToken")
        
            return res.status(200).send({ user, token, status: true });
     }
     catch (error) {
        console.log(error,'f ctrl')
        res.status(404);
      }
}


module.exports= {
    getAll,
    register,
    updateProfile,
    deleteStudent,
    getOne,
    updateName,
    signUp,
    login
}