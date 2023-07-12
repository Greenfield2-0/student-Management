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
module.exports={getAll}

