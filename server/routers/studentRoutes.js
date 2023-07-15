var express=require("express")
var router=express.Router()
var student = require("../controller/students")

router.get("/",student.getAll)
router.post("/register",student.register)
router.put("/update/:id",student.updateProfile)
router.delete("/delete/:id",student.deleteStudent)
router.get("/one/:name",student.getOne)
router.put("/name/:id",student.updateName)
router.post("/signup",student.signUp)
router.post("/login",student.login)
module.exports = router