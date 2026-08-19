const express= require("express");
const router=express.Router();
router.use(express.json());


// const { getTeacher, getTeacherById, addTeacher, updateTeacher, deleteTeacher }= require("../controllers/teacherController");

// router.get("/", getTeacher);
// router.get("/:id", getTeacherById);
// router.post("/", addTeacher);
// router.put("/:id", updateTeacher);
// router.delete("/:id", deleteTeacher);



const {registerTeacher, getTeacher, getTeacherById, updateTeacher, deleteTeacher, firstThreeTeacher}= require("../controllers/teacherController");




router.post("/register", registerTeacher);
router.get("/", getTeacher);
router.get("/:id", getTeacherById);
router.put("/:id", updateTeacher);
router.delete("/:id", deleteTeacher);
router.get("/limit/3", firstThreeTeacher);


module.exports=router;


