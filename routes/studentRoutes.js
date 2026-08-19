// const express= require("express");
// const router= express.Router();
// router.use(express.json());

// const students= [
// {id:1, name:"Rahul", age:20},
// {id:2, name:"banti", age:25},
// {id:3, name:"Monu", age:23}

// ];

// //all student get meth.
// router.get("/", (req, res)=>{

//     res.json(students);
// });
// router.get("/:id", (req, res)=>{
// const id= Number(req.params.id);
// const student= students.find((s)=>s.id===id);
// if(!student){

//     return res.json({message:"Student Not Found"});
// };
// res.json(student);

// });

// //post
// router.post("/", (req, res)=>{

//     const newStudent= req.body;

//     students.push(newStudent);
//     res.json({message:"new student added", student: newStudent});
// });
// //put
// router.put("/:id", (req, res)=>{

//     const id= Number(req.params.id);
//     const student= students.find((s)=>s.id===id);

//     if(!student){

//         res.json({message:"student not found"});
//     }
// student.id= req.body.id,
// student.name= req.body.name,
// student.age= req.body.age;

// res.json({message:"student upsated success", student});

// });
// //delete
// router.delete("/:id", (req, res)=>{
// const id= Number(req.params.id);
// const index= students.findIndex((s)=>s.id===id);

// if(index === -1){
// res.json({message:"student not found"});

// }
// const deleteStudent= students[index];
// students.splice(index, 1);
// res.json({message:"student delete successfully", student: deleteStudent});

// });

// module.exports = router;


const express= require("express");
const router= express.Router();
router.use(express.json());

// const {getStudents, getStudentsById, addStudent, updateStudent, deleteStudent} = require("../controllers/studentController");



// router.get("/", getStudents);
// router.get("/:id", getStudentsById);
// router.post("/", addStudent);
// router.put("/:id", updateStudent);
// router.delete("/:id", deleteStudent);



const {registerStudent, getStudent, getStudentsById, updateStudent, deleteStudent, firstThreeStudent}= require("../controllers/studentController");


router.post("/register", registerStudent);
router.get("/", getStudent)
router.get("/:id", getStudentsById);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);
router.get("/limit/3", firstThreeStudent)



module.exports = router;





