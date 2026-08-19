// const express= require("express");
// const router= require("../routes/studentRoutes");

// const students= [

// {id:1, name:"Rahul", age:20},
//  {id:2, name:"banti", age:25},
//  {id:3, name:"Monu", age:23}
// ];

// //get method

// const getStudents= (req, res)=>{
// res.json(students);

// };
// //id by get method
// const getStudentsById= (req, res)=>{

// const id= Number(req.params.id);
// const student= students.find((s)=>s.id===id);
// if(!student){

//     res.json({message:"student not found"});
// }
// res.json(student);
// };
// //post

// const addStudent= (req, res)=>{
    
//     const newStudent= req.body;

//     students.push(newStudent);
//     res.json({message:"new student added success"});
// };
// // put

// const updateStudent= (req, res)=>{

//     const id= Number(req.params.id);
//     const student= students.find((s)=>s.id===id);

//     if(!student){

//         res.json({message:"student not found"});
//     };

//     student.id= req.body.id,
//     student.name= req.body.name,
//     student.age= req.body.age;

// res.json({message:"Student updated successfully", student});
// };
// //delete

// const deleteStudent= (req, res)=>{

//     const id= Number(req.params.id);
//     const index= students.findIndex((s)=>s.id===id);

//     if(index === -1){

//         res.json({message:"Student Not Found"});
//     };
// students.splice(index, 1);
// res.json({message:"student delete sucessfully"});

// }


// module.exports= {getStudents, getStudentsById, addStudent, updateStudent, deleteStudent};



const Student= require("../models/studentModel");
const studentService= require("../services/studentService");

const registerStudent= async(req, res)=>{


const student= await studentService.registerStudent(req.body);
res.json(student);
}


//get by all show student

const getStudent= async(req, res)=>{

    try{

    const student= await studentService.getStudent();
    res.status(200).json(student);
}
catch(error){

    res.status(404).json("message: error.message, error: error");
}
}

//get by id
const getStudentsById= async(req, res)=>{

try{

const student= await studentService.getStudentsById(req.params.id);
res.status(201).json(student);

}
catch(error){

res.status(404).json({message: error.message, error: error});
}

}

//put update
const updateStudent= async(req, res)=>{


try{
    console.log(req.body);

    const student= await studentService.updateStudent(req.params.id, req.body);
    res.json(student);
}

catch(error){

    res.json({message: error.message, error: error});
}
}

//delete
const deleteStudent=async(req, res)=>{


    try{

        const student= await studentService.deleteStudent(req.params.id, req.body);
        res.json(student);
    }
catch(error){

    res.json({message: error.message, error: error});
}

}

//first 3 student show
const firstThreeStudent=async(req, res)=>{


    try{
 const page= Number(req.query.page) || 1;
    const limit= Number(req.query.page) || 3;

        const student= await studentService.firstThreeStudent(page, limit);
        res.json(student);
    }
    catch(error){

        res.json({message: error.message, error: error});
    }
}



module.exports= {registerStudent, getStudent, getStudentsById, updateStudent, deleteStudent, firstThreeStudent};



