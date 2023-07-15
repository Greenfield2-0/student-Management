const bcrypt = require('bcrypt');
const jwt=  require('jsonwebtoken');
var teach=require("../model/teacher");

const getAll=async(req,res)=>{
    try {
        const teachers = await teach.find();
        console.log(' works f ctrl')
        res.json(teachers);
      } catch (error) {
        console.log(error,'f ctrl')
        res.status(404);
      }
}

const add=async(req,res)=>{
    const {name,email,course,password}=req.body
    try{
        const teachers = await teach.create({name,email,course,password});
        console.log('add works f ctrl')
        res.json(teachers);
    }
    catch (error) {
        console.log(error,'f ctrl')
        res.status(404);
      }
}
const updateName=async(req,res)=>{
    const name=req.body
    const id=req.params.id
    try{
        const teachers = await teach.findByIdAndUpdate(id,name,{ new: true });
        console.log('update works f ctrl')
        res.json(teachers);
    }
    catch (error) {
        console.log(error,'f ctrl')
        res.status(404);
      }
}
const deleteStud=async(req,res)=>{
    const id=req.params.id
    try{
        const teachers = await teach.findByIdAndDelete(id);
        console.log('delete works f ctrl')
        res.json(teachers);
    }
    catch (error) {
        console.log(error,'f ctrl')
        res.status(404);
      }
}
const SignUP=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const user=await teach.findOne({email:email})
        if(user){
            res.json("mail exist")
        }
        else{
            const hashedPw=await bcrypt.hash(password,10)
            const teacher = await teach.create({name,email,cours:"",password:hashedPw});
            console.log(teacher);
            const token=  jwt.sign({id:teacher.id,email:email},"teacher");
             res.status(201).json({teacher,token});
        }

    }
    catch(error){
       console.log(error)
       res.json(error)
    }

}

const login=async(req,res)=>{
    try{
       const {email,password}=req.body;
       const user=await teach.findOne({email:email})
       let isValidpw=false
       if(user){
        isValidpw= await bcrypt.compare(password,user.password);
        if(isValidpw){
             console.log('u are logged',isValidpw)
            const token= jwt.sign({id:user.id,email:email},"teacher");
             res.json({token,user});
        }
        else{
            console.log(isValidpw)
         res.json("invalid email or password")
        }
       }
    }
    catch (error) {
        console.log(error,'f ctrl')
        res.status(404);
      }

}





module.exports={getAll,add,updateName,deleteStud,login,SignUP}

