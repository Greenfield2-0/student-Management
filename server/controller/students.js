var student = require("../model/students")

const getAll=async(req,res)=>{
    try{
        const stud = await student.find()  
        res.json(stud)
      }
      catch (err) {
        res.status(500).send(err)
      }
}




module.exports= {
    getAll
}