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





module.exports={getAll,add,updateName,deleteStud}

