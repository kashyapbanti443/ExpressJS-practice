
const bcrypt= require("bcrypt");

 const Teacher= require("../models/teacherModel");


 const registerTeacher=async(data)=>{
    
    const hashPassword= await bcrypt.hash(data.password, 10);

    data.password= hashPassword;

    return await Teacher.create(data);
 }


// get by all show teacher
const getTeacher= async()=>{

    const teacher= await Teacher.find();
    return teacher;
}

//getbyid show teacher

const getTeacherById= async(id)=>{

return await Teacher.findById(id);
    
}

//put 
const updateTeacher= async(id, data)=>{

return await Teacher.findByIdAndUpdate(id, data, {new: true});

}

//delete

const deleteTeacher= async(id, data)=>{

    return await Teacher.findByIdAndDelete(id, data, {new: true});
    
}

//first 3 teacher show
const firstThreeTeacher= async(page, limit)=>{

    return await Teacher.find().skip((page -1)*limit).limit(limit);
}




 module.exports= {registerTeacher, getTeacher, getTeacherById, updateTeacher, deleteTeacher, firstThreeTeacher};