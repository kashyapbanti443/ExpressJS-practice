const bcrypt= require("bcrypt");

const Student= require("../models/studentModel");

const registerStudent= async(data)=>{

const hashPassword=await bcrypt.hash(data.password, 10)

data.password= hashPassword;

return await Student.create(data);
}

//get method show all students
const getStudent= async()=>{

const students= await Student.find();
return students;
    
}
//get by id show student

const getStudentsById= async(id)=>{

    return await Student.findById(id);
}

//put
const updateStudent = async (id, data) => {
    return await Student.findByIdAndUpdate(id, data, {
        new: true
    });
};
//delete
const deleteStudent= async(id, data)=>{

    return await Student.findByIdAndDelete(id, data, {new: true});
}

//firstThreeStudent
const firstThreeStudent=async(page, limit)=>{

return await Student.find().skip((page -1)*limit).limit(limit);
}




module.exports={registerStudent, getStudent, getStudentsById, updateStudent, deleteStudent, firstThreeStudent};

