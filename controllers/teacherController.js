// const express= require("express");

// const teachers= [

// {id: 1, name: "Ankush", Subject:"Math"},
// {id:2, name: "Vishal", Subject:"English"},
// {id:3,  name: "Rahul", Subject:"Hindi"}
// ];

// //get method

// const getTeacher= (req, res)=>{

//     res.json(teachers);
// };
// // get by id

// const getTeacherById= (req, res)=>{

//     const id= Number(req.params.id);
//     const teacher= teachers.find((t)=>t.id===id);

//     if(!teacher){

//         res.json({message:"Teacher Not Found"});
//     }
//     res.json(teacher);
// };

// //pst
// const addTeacher= (req, res)=>{

//     const newTeacher= req.body;
//     teachers.push(newTeacher);
//     res.json({message:"Teacher Added successfully", teacher: newTeacher});
// };

// const updateTeacher= (req, res)=>{

//     const id= Number(req.params.id);
//     const teacher= teachers.find((t)=>t.id===id);

//     if(!teacher){

//         res.json({message:"teacher not found"});
//     };

//     teacher.id= req.body.id,
//     teacher.name= req.body.name,
//     teacher.Subject= req.body.Subject;

//     res.json({message:"teacher update successfully", teacher});
// };
// //delete

// const deleteTeacher= (req, res)=>{

//     const id= Number(req.params.id);
//     const index= teachers.findIndex((t)=>t.id===id);

//     if(index === -1){

//         return res.json({message:"teacher not found"});
//     };
// teachers.splice(index, 1);
// res.json({message:"teacher delete successfully"});
    
// }

// module.exports={getTeacher, getTeacherById, addTeacher, updateTeacher, deleteTeacher};



const Teacher= require("../models/teacherModel");
const teacherService= require("../services/teacherService");





const registerTeacher= async(req, res)=>{

const teacher= await teacherService.registerTeacher(req.body);

res.json(teacher);

}

// all teacher show get 

const getTeacher= async(req, res)=>{

try{

const teacher= await teacherService.getTeacher();
res.json(teacher);

}
catch(error){

    res.json({message: error.error, message: error});
}

}

//id by show teacher 

const getTeacherById= async(req, res)=>{

try{

    const teacher= await teacherService.getTeacherById(req.params.id);
    res.json(teacher);
}
catch(error){

    res.json({message: error.error, message: error});
}
}

//update teacher

const updateTeacher= async(req, res)=>{

try{

const teacher= await teacherService.updateTeacher(req.params.id, req.body);
res.json(teacher)

}
catch(error){

    res.json({message: error.error, error: error});
}

}

//delete

const deleteTeacher= async(req, res)=>{

    try{
console.log(req.body);
        const Teacher= await teacherService.deleteTeacher(req.params.id, req.body);
        res.status(202).json(Teacher);
    }
    catch(error){

        res.status(500).json({message: error.message, error: error});
    }
}

//first 3 teacher show

const firstThreeTeacher= async(req, res)=>{

    try{

const page= Number(req.query.page) || 1;
const limit= Number(req.query.page) || 3;

const teacher= await teacherService.firstThreeTeacher(page, limit);
res.json(teacher);

    }
catch(error){

    res.json({message: error.message, error: error});
}

}



module.exports= {registerTeacher, getTeacher, getTeacherById, updateTeacher, updateTeacher, deleteTeacher, firstThreeTeacher};

